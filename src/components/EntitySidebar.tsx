import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ENTITY_DATA } from "@/data/entityData";
import { User, Building, X, ExternalLink, AlertTriangle, CheckCircle } from "lucide-react";
import RichText from "./RichText";

interface EntitySidebarProps {
  entityId: string | null;
  onClose: () => void;
  onViewFullDetails: (entityId: string) => void;
}

const EntitySidebar: React.FC<EntitySidebarProps> = ({
  entityId,
  onClose,
  onViewFullDetails
}) => {
  if (!entityId) return null;

  const entity =
    ENTITY_DATA.canonical_entities.people[entityId] ||
    ENTITY_DATA.canonical_entities.companies[entityId];

  if (!entity) return null;

  const entityType = ENTITY_DATA.canonical_entities.people[entityId] ? "person" : "company";

  // Get relationships for this entity
  const relationships = ENTITY_DATA.relationships.filter(
    rel => rel.subject === entityId || rel.object === entityId
  );

  // Get quotes FOR this entity (bidirectional connections)
  const quotesSpokenByEntity = ENTITY_DATA.excerpts.filter(
    excerpt => excerpt.speaker === entityId
  );

  const quotesMentioningEntity = ENTITY_DATA.excerpts.filter(
    excerpt => excerpt.mentioned_entities.includes(entityId) && excerpt.speaker !== entityId
  );

  const totalQuotes = quotesSpokenByEntity.length + quotesMentioningEntity.length;

  // Calculate evidence statistics
  const verifiedRelationships = relationships.filter(rel => rel.evidence_excerpts && rel.evidence_excerpts.length > 0);
  const evidenceRatio = relationships.length > 0 ? Math.round((verifiedRelationships.length / relationships.length) * 100) : 0;

  const getRelatedEntityName = (relEntityId: string) => {
    return ENTITY_DATA.canonical_entities.people[relEntityId]?.canonical_name ||
           ENTITY_DATA.canonical_entities.companies[relEntityId]?.canonical_name ||
           relEntityId;
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

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-background border-l border-border z-50 shadow-lg overflow-y-auto">
      <Card className="h-full rounded-none border-0">
        <CardHeader className="border-b border-border">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-muted">
                {entityType === "person" ? (
                  <User className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Building className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
              <div>
                <CardTitle className="text-lg leading-tight">
                  {entity.canonical_name}
                </CardTitle>
                <Badge variant="outline" className="text-xs mt-1">
                  {entityType}
                </Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-4 space-y-4">
          {/* Description */}
          <div>
            <h4 className="font-medium mb-2">Description</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {entity.description}
            </p>
          </div>

          {/* Aliases */}
          {entity.aliases && entity.aliases.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">Also known as</h4>
              <div className="flex flex-wrap gap-1">
                {entity.aliases.map((alias, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {alias}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Relationships */}
          {relationships.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Relationships ({relationships.length})</h4>
                <Badge variant={evidenceRatio >= 50 ? "default" : "secondary"} className="text-xs">
                  {evidenceRatio}% verified
                </Badge>
              </div>
              <div className="space-y-2">
                {relationships.slice(0, 5).map((rel) => {
                  const isSubject = rel.subject === entityId;
                  const relatedEntityId = isSubject ? rel.object : rel.subject;
                  const relatedEntityName = getRelatedEntityName(relatedEntityId);
                  const hasEvidence = rel.evidence_excerpts && rel.evidence_excerpts.length > 0;

                  return (
                    <div key={rel.id} className={`text-sm p-2 rounded border ${
                      hasEvidence
                        ? 'bg-muted border-gray-200'
                        : 'bg-yellow-50 border-yellow-200'
                    }`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-medium flex items-center gap-2">
                            {formatRelationType(rel.type)} {relatedEntityName}
                            {hasEvidence ? (
                              <CheckCircle className="h-3 w-3 text-green-600" />
                            ) : (
                              <AlertTriangle className="h-3 w-3 text-yellow-600" />
                            )}
                          </div>
                          {rel.temporal && (
                            <div className="text-xs text-muted-foreground mt-1">
                              {rel.temporal}
                            </div>
                          )}
                          {!hasEvidence && (
                            <div className="text-xs text-yellow-600 mt-1">
                              General knowledge - no direct evidence
                            </div>
                          )}
                          {hasEvidence && (
                            <div className="text-xs text-green-600 mt-1">
                              {rel.evidence_excerpts.length} excerpt{rel.evidence_excerpts.length > 1 ? 's' : ''}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
                {relationships.length > 5 && (
                  <div className="text-xs text-muted-foreground text-center">
                    +{relationships.length - 5} more relationships
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quotes by this entity */}
          {quotesSpokenByEntity.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">Quotes by {entity.canonical_name} ({quotesSpokenByEntity.length})</h4>
              <div className="space-y-2">
                {quotesSpokenByEntity.slice(0, 2).map((quote) => (
                  <div key={quote.id} className="text-sm p-3 bg-muted rounded border-l-2 border-blue-500">
                    <p className="italic mb-2">
                      "<RichText text={quote.quote_text.length > 100 ? `${quote.quote_text.substring(0, 100)}...` : quote.quote_text} className="inline" />"
                    </p>
                    <div className="text-xs text-muted-foreground">
                      {quote.source.date} • {quote.context}
                    </div>
                    {quote.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {quote.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag.replace(/_/g, ' ')}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {quotesSpokenByEntity.length > 2 && (
                  <div className="text-xs text-muted-foreground text-center">
                    +{quotesSpokenByEntity.length - 2} more quotes by {entity.canonical_name}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quotes mentioning this entity */}
          {quotesMentioningEntity.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">Mentions of {entity.canonical_name} ({quotesMentioningEntity.length})</h4>
              <div className="space-y-2">
                {quotesMentioningEntity.slice(0, 2).map((quote) => {
                  const speaker = ENTITY_DATA.canonical_entities.people[quote.speaker] ||
                                 ENTITY_DATA.canonical_entities.companies[quote.speaker];
                  const speakerName = speaker?.canonical_name || quote.speaker;

                  return (
                    <div key={quote.id} className="text-sm p-3 bg-muted rounded border-l-2 border-green-500">
                      <p className="italic mb-2">
                        "<RichText text={quote.quote_text.length > 100 ? `${quote.quote_text.substring(0, 100)}...` : quote.quote_text} className="inline" />"
                      </p>
                      <div className="text-xs text-muted-foreground mb-1">
                        — {speakerName} • {quote.source.date}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {quote.context}
                      </div>
                    </div>
                  );
                })}
                {quotesMentioningEntity.length > 2 && (
                  <div className="text-xs text-muted-foreground text-center">
                    +{quotesMentioningEntity.length - 2} more mentions
                  </div>
                )}
              </div>
            </div>
          )}

          {/* No quotes message */}
          {totalQuotes === 0 && (
            <div>
              <h4 className="font-medium mb-2">Quotes</h4>
              <p className="text-xs text-muted-foreground">
                No direct quotes or mentions found in the research document.
              </p>
            </div>
          )}

          {/* View Full Details Button */}
          <div className="pt-2">
            <Button
              onClick={() => onViewFullDetails(entityId)}
              className="w-full flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              View Full Entity Page
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EntitySidebar;