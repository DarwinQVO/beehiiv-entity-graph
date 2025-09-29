import React, { useMemo, useState, useRef, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ENTITY_DATA } from "@/data/entityData";
import { User, Building, ArrowLeft, Focus, Info } from "lucide-react";

interface Node {
  id: string;
  name: string;
  type: "person" | "company";
  x: number;
  y: number;
  connections: number;
}

interface Edge {
  source: string;
  target: string;
  type: string;
}

interface VisualGraphProps {
  onEntitySelect: (entityId: string) => void;
  onBackToCards: () => void;
  onSidebarEntitySelect?: (entityId: string) => void;
}

const VisualGraph: React.FC<VisualGraphProps> = ({ onEntitySelect, onBackToCards, onSidebarEntitySelect }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [focusMode, setFocusMode] = useState<boolean>(false);
  const [dragging, setDragging] = useState<{
    nodeId: string | null;
    offset: { x: number; y: number };
    startPos: { x: number; y: number } | null;
    hasMoved: boolean;
  }>({ nodeId: null, offset: { x: 0, y: 0 }, startPos: null, hasMoved: false });
  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>({});
  const svgRef = useRef<SVGSVGElement>(null);

  const { nodes, edges } = useMemo(() => {
    const allEntities: Node[] = [];
    const allEdges: Edge[] = [];

    // Create edges from relationships first
    ENTITY_DATA.relationships.forEach(rel => {
      allEdges.push({
        source: rel.subject,
        target: rel.object,
        type: rel.type
      });
    });

    // Get all entity IDs that have connections
    const connectedEntityIds = new Set<string>();
    allEdges.forEach(edge => {
      connectedEntityIds.add(edge.source);
      connectedEntityIds.add(edge.target);
    });

    // Create nodes only for people with connections using force-directed layout
    const peopleEntries = Object.entries(ENTITY_DATA.canonical_entities.people);
    const companiesEntries = Object.entries(ENTITY_DATA.canonical_entities.companies);

    let personIndex = 0;
    peopleEntries.forEach(([id, entity]) => {
      if (connectedEntityIds.has(id)) {
        const connections = ENTITY_DATA.relationships.filter(
          rel => rel.subject === id || rel.object === id
        ).length;

        // Better initial positioning with more spread
        const angle = (personIndex * 2 * Math.PI) / peopleEntries.filter(([pid]) => connectedEntityIds.has(pid)).length;
        const radius = 250 + connections * 20; // Larger radius based on connections

        allEntities.push({
          id,
          name: entity.canonical_name,
          type: "person",
          x: 700 + radius * Math.cos(angle),
          y: 400 + radius * Math.sin(angle),
          connections
        });
        personIndex++;
      }
    });

    // Create nodes only for companies with connections using different layout
    let companyIndex = 0;
    companiesEntries.forEach(([id, entity]) => {
      if (connectedEntityIds.has(id)) {
        const connections = ENTITY_DATA.relationships.filter(
          rel => rel.subject === id || rel.object === id
        ).length;

        // Position companies in inner circle
        const angle = (companyIndex * 2 * Math.PI) / companiesEntries.filter(([cid]) => connectedEntityIds.has(cid)).length;
        const radius = 150 + connections * 15;

        allEntities.push({
          id,
          name: entity.canonical_name,
          type: "company",
          x: 700 + radius * Math.cos(angle + Math.PI / 4), // Offset angle
          y: 400 + radius * Math.sin(angle + Math.PI / 4),
          connections
        });
        companyIndex++;
      }
    });

    return { nodes: allEntities, edges: allEdges };
  }, []);

  // Get actual node positions including any user dragging
  const getNodePosition = useCallback((nodeId: string) => {
    const originalNode = nodes.find(node => node.id === nodeId);
    const draggedPosition = nodePositions[nodeId];

    if (!originalNode) return { x: 0, y: 0 };

    return draggedPosition || { x: originalNode.x, y: originalNode.y };
  }, [nodes, nodePositions]);

  const getNodeById = (id: string) => nodes.find(node => node.id === id);

  const getNodeRadius = (connections: number) => {
    return Math.max(20, Math.min(40, 20 + connections * 3));
  };

  const getNodeColor = (type: "person" | "company", isSelected: boolean) => {
    if (isSelected) return "#000000";
    return type === "person" ? "#666666" : "#999999";
  };

  // Mouse event handlers for dragging
  const handleMouseDown = useCallback((e: React.MouseEvent, nodeId: string) => {
    e.preventDefault();
    e.stopPropagation();

    const svg = svgRef.current;
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const nodePos = getNodePosition(nodeId);
    const clientX = (e.clientX - rect.left) * (1400 / rect.width);
    const clientY = (e.clientY - rect.top) * (800 / rect.height);

    setDragging({
      nodeId,
      offset: {
        x: clientX - nodePos.x,
        y: clientY - nodePos.y
      },
      startPos: { x: clientX, y: clientY },
      hasMoved: false
    });
  }, [getNodePosition]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging.nodeId || !svgRef.current || !dragging.startPos) return;

    const rect = svgRef.current.getBoundingClientRect();
    const currentX = (e.clientX - rect.left) * (1400 / rect.width);
    const currentY = (e.clientY - rect.top) * (800 / rect.height);

    // Calculate distance moved from start position
    const deltaX = Math.abs(currentX - dragging.startPos.x);
    const deltaY = Math.abs(currentY - dragging.startPos.y);
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Threshold: if moved more than 5 pixels, it's a drag
    const DRAG_THRESHOLD = 5;

    if (distance > DRAG_THRESHOLD && !dragging.hasMoved) {
      // Mark as moved to prevent click action
      setDragging(prev => ({ ...prev, hasMoved: true }));
    }

    if (distance > DRAG_THRESHOLD) {
      const newX = currentX - dragging.offset.x;
      const newY = currentY - dragging.offset.y;

      // Keep nodes within bounds
      const clampedX = Math.max(50, Math.min(1350, newX));
      const clampedY = Math.max(50, Math.min(750, newY));

      setNodePositions(prev => ({
        ...prev,
        [dragging.nodeId!]: { x: clampedX, y: clampedY }
      }));
    }
  }, [dragging]);

  const handleMouseUp = useCallback((nodeId?: string) => {
    const wasDragging = dragging.nodeId;
    const hasMoved = dragging.hasMoved;

    // Reset dragging state
    setDragging({ nodeId: null, offset: { x: 0, y: 0 }, startPos: null, hasMoved: false });

    // If we just finished a click (not a drag) on a specific node, handle selection
    if (wasDragging && nodeId && !hasMoved) {
      if (focusMode && selectedNode === nodeId) {
        // Exit focus mode if clicking the same node
        setFocusMode(false);
        setSelectedNode(null);
      } else {
        // Always select and center the node, activate focus mode
        setSelectedNode(nodeId);
        setFocusMode(true);
        centerNode(nodeId);

        // Notify sidebar about selection
        if (onSidebarEntitySelect) {
          onSidebarEntitySelect(nodeId);
        }
      }
    }
  }, [dragging, focusMode, selectedNode, onSidebarEntitySelect]);


  const handleViewEntityDetails = (nodeId: string) => {
    // This will open the full entity page
    onEntitySelect(nodeId);
  };

  const toggleFocusMode = () => {
    if (!selectedNode) return;
    setFocusMode(!focusMode);
    if (!focusMode) {
      centerNode(selectedNode);
    }
  };

  const centerNode = (nodeId: string) => {
    const nodePos = getNodePosition(nodeId);
    const centerX = 700; // Center of 1400px viewBox
    const centerY = 400; // Center of 800px viewBox

    const offsetX = centerX - nodePos.x;
    const offsetY = centerY - nodePos.y;

    // Update all node positions to center the selected node
    const newPositions: Record<string, { x: number; y: number }> = {};

    nodes.forEach(node => {
      const currentPos = getNodePosition(node.id);
      newPositions[node.id] = {
        x: Math.max(50, Math.min(1350, currentPos.x + offsetX)),
        y: Math.max(50, Math.min(750, currentPos.y + offsetY))
      };
    });

    setNodePositions(newPositions);
  };

  const formatRelationType = (type: string) => {
    switch (type) {
      case 'co_founded': return 'co-founded';
      case 'worked_at': return 'worked at';
      case 'advisor_to': return 'advises';
      case 'friends_with': return 'friends';
      case 'invested_in': return 'invested';
      case 'founded': return 'founded';
      case 'acquired': return 'acquired';
      case 'inspired': return 'inspired';
      case 'works_at': return 'works at';
      default: return type.replace('_', ' ');
    }
  };

  // Filter nodes and edges based on focus mode
  const visibleNodes = useMemo(() => {
    if (!focusMode || !selectedNode) return nodes;

    const connectedNodeIds = new Set([selectedNode]);
    edges.forEach(edge => {
      if (edge.source === selectedNode) connectedNodeIds.add(edge.target);
      if (edge.target === selectedNode) connectedNodeIds.add(edge.source);
    });

    return nodes.filter(node => connectedNodeIds.has(node.id));
  }, [nodes, edges, focusMode, selectedNode]);

  const visibleEdges = useMemo(() => {
    if (!focusMode || !selectedNode) return edges;

    return edges.filter(edge =>
      edge.source === selectedNode || edge.target === selectedNode
    );
  }, [edges, focusMode, selectedNode]);

  return (
    <div className={`min-h-screen bg-background transition-all duration-300 ${selectedNode && onSidebarEntitySelect ? 'pr-96' : ''}`}>
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={onBackToCards}
            className="p-2 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Cards View
          </Button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-foreground mb-2">
                Beehiiv Entity Graph
              </h1>
              <p className="text-muted-foreground">
                {focusMode
                  ? `Focus mode: ${visibleNodes.length} related entities • Click node again to exit`
                  : `${nodes.length} entities, ${edges.length} relationships • Click node to focus or view details`
                }
              </p>
            </div>
            <div className="flex items-center gap-6">
              {selectedNode && (
                <div className="flex gap-2">
                  <Button
                    onClick={toggleFocusMode}
                    variant={focusMode ? "default" : "outline"}
                    className="flex items-center gap-2"
                  >
                    <Focus className="h-4 w-4" />
                    {focusMode ? "Exit Focus" : "Focus Mode"}
                  </Button>
                  <Button
                    onClick={() => handleViewEntityDetails(selectedNode)}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Info className="h-4 w-4" />
                    Entity Details
                  </Button>
                </div>
              )}
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                  <span className="text-sm text-muted-foreground">People</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-gray-400"></div>
                  <span className="text-sm text-muted-foreground">Companies</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Graph Container */}
        <Card className="p-0">
          <CardContent className="p-0">
            <div className="relative overflow-hidden" style={{ minHeight: "800px" }}>
              <svg
                ref={svgRef}
                width="100%"
                height="800"
                viewBox="0 0 1400 800"
                className="border-0"
                onMouseMove={handleMouseMove}
                onMouseUp={() => handleMouseUp()}
                onMouseLeave={() => handleMouseUp()}
              >
                {/* Render edges */}
                <g>
                  {visibleEdges.map((edge, index) => {
                    const sourceNode = getNodeById(edge.source);
                    const targetNode = getNodeById(edge.target);

                    if (!sourceNode || !targetNode) return null;

                    const sourcePos = getNodePosition(edge.source);
                    const targetPos = getNodePosition(edge.target);

                    // Calculate midpoint for label
                    const midX = (sourcePos.x + targetPos.x) / 2;
                    const midY = (sourcePos.y + targetPos.y) / 2;

                    const hasEvidence = edge.evidence_excerpts && edge.evidence_excerpts.length > 0;

                    return (
                      <g key={`edge-${index}`}>
                        {/* Connection line */}
                        <line
                          x1={sourcePos.x}
                          y1={sourcePos.y}
                          x2={targetPos.x}
                          y2={targetPos.y}
                          stroke={hasEvidence ? "#666666" : "#d4d4d4"}
                          strokeWidth={hasEvidence ? "2" : "1"}
                          strokeDasharray={hasEvidence ? "none" : "4,4"}
                          opacity={hasEvidence ? "0.8" : "0.5"}
                        />

                        {/* Relationship label */}
                        <text
                          x={midX}
                          y={midY}
                          textAnchor="middle"
                          className="text-xs fill-muted-foreground font-medium"
                          style={{
                            fontSize: "10px",
                            fill: "#666666"
                          }}
                          dy="-4"
                        >
                          {formatRelationType(edge.type)}
                        </text>

                        {/* Background for text readability */}
                        <rect
                          x={midX - (formatRelationType(edge.type).length * 3 + (hasEvidence ? 0 : 6))}
                          y={midY - 12}
                          width={formatRelationType(edge.type).length * 6 + (hasEvidence ? 0 : 12)}
                          height="16"
                          fill={hasEvidence ? "white" : "#fef3c7"}
                          opacity="0.9"
                          rx="2"
                          stroke={hasEvidence ? "#d4d4d4" : "#f59e0b"}
                          strokeWidth="0.5"
                        />

                        {/* Relationship label (re-render on top) */}
                        <text
                          x={midX}
                          y={midY}
                          textAnchor="middle"
                          className="text-xs font-medium"
                          style={{
                            fontSize: "10px",
                            fill: hasEvidence ? "#666666" : "#d97706"
                          }}
                          dy="-4"
                        >
                          {formatRelationType(edge.type)}{hasEvidence ? "" : " *"}
                        </text>
                      </g>
                    );
                  })}
                </g>

                {/* Render nodes */}
                <g>
                  {visibleNodes.map((node) => {
                    const isSelected = selectedNode === node.id;
                    const radius = getNodeRadius(node.connections);
                    const nodePos = getNodePosition(node.id);

                    return (
                      <g key={node.id}>
                        {/* Node circle */}
                        <circle
                          cx={nodePos.x}
                          cy={nodePos.y}
                          r={radius}
                          fill={getNodeColor(node.type, isSelected)}
                          stroke={isSelected ? "#000000" : "#d4d4d4"}
                          strokeWidth={isSelected ? "3" : "1"}
                          className="cursor-pointer transition-all hover:stroke-gray-600"
                          onMouseDown={(e) => handleMouseDown(e, node.id)}
                          onMouseUp={() => handleMouseUp(node.id)}
                          style={{ cursor: dragging.nodeId === node.id ? 'grabbing' : 'grab' }}
                        />

                        {/* Node icon */}
                        <foreignObject
                          x={nodePos.x - 8}
                          y={nodePos.y - 8}
                          width="16"
                          height="16"
                          className="pointer-events-none"
                        >
                          {node.type === "person" ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Building className="h-4 w-4 text-white" />
                          )}
                        </foreignObject>

                        {/* Node label */}
                        <text
                          x={nodePos.x}
                          y={nodePos.y + radius + 20}
                          textAnchor="middle"
                          className="text-sm fill-current text-foreground font-medium"
                          style={{ fontSize: "12px" }}
                        >
                          {node.name.length > 15 ? `${node.name.substring(0, 15)}...` : node.name}
                        </text>

                        {/* Connection count */}
                        {node.connections > 0 && (
                          <circle
                            cx={nodePos.x + radius - 8}
                            cy={nodePos.y - radius + 8}
                            r="10"
                            fill="#000000"
                            className="pointer-events-none"
                          />
                        )}
                        {node.connections > 0 && (
                          <text
                            x={nodePos.x + radius - 8}
                            y={nodePos.y - radius + 8}
                            textAnchor="middle"
                            className="text-xs fill-white font-medium pointer-events-none"
                            dy="4"
                            style={{ fontSize: "10px" }}
                          >
                            {node.connections}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Legend */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Graph Legend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">Node Types</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center">
                      <User className="h-3 w-3 text-white" />
                    </div>
                    <span>People</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-sm bg-gray-400 flex items-center justify-center">
                      <Building className="h-3 w-3 text-white" />
                    </div>
                    <span>Companies</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Evidence Types</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-gray-600"></div>
                    <span>Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-gray-400" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, #9ca3af 2px, #9ca3af 4px)'}}></div>
                    <span>General Knowledge *</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Node Size</h4>
                <p className="text-muted-foreground">
                  Larger nodes = more connections
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Interactions</h4>
                <p className="text-muted-foreground">
                  Click node to focus, sidebar shows details
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisualGraph;