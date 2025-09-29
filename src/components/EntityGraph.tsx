import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ENTITY_DATA, type EntityData } from "@/data/entityData";
import { User, Building, Network } from "lucide-react";

interface Entity {
  id: string;
  canonical_name: string;
  description: string;
  type: "person" | "company";
}

interface EntityGraphProps {
  onEntitySelect: (entityId: string) => void;
  onShowVisualGraph: () => void;
}

const EntityGraph: React.FC<EntityGraphProps> = ({ onEntitySelect, onShowVisualGraph }) => {
  const getAllEntities = (): Entity[] => {
    const entities: Entity[] = [];

    // Add people
    Object.entries(ENTITY_DATA.canonical_entities.people).forEach(([id, entity]) => {
      entities.push({ id, ...entity, type: "person" });
    });

    // Add companies
    Object.entries(ENTITY_DATA.canonical_entities.companies).forEach(([id, entity]) => {
      entities.push({ id, ...entity, type: "company" });
    });

    return entities;
  };

  const entities = getAllEntities();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-semibold text-foreground mb-2">
                Beehiiv Entity Graph
              </h1>
              <p className="text-muted-foreground">
                {entities.length} entities • Click any entity to explore relationships
              </p>
            </div>
            <Button
              onClick={onShowVisualGraph}
              className="flex items-center gap-2"
            >
              <Network className="h-4 w-4" />
              Visual Graph
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entities.map((entity) => (
            <Card
              key={entity.id}
              className="cursor-pointer transition-all hover:scale-105 hover:shadow-md"
              onClick={() => onEntitySelect(entity.id)}
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-muted">
                      {entity.type === "person" ? (
                        <User className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Building className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg leading-tight">
                        {entity.canonical_name}
                      </CardTitle>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {entity.type}
                  </Badge>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {entity.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntityGraph;