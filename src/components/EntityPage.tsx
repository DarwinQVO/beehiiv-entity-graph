import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ENTITY_DATA } from "@/data/entityData";
import { ArrowLeft, Quote, ExternalLink } from "lucide-react";
import RichText from "./RichText";
import SmartEmbed from "./SmartEmbed";

interface EntityPageProps {
  entityId: string;
  onBack: () => void;
  onEntitySelect: (entityId: string) => void;
  onShowEvidence: (relationship: any) => void;
}

const EntityPage: React.FC<EntityPageProps> = ({
  entityId,
  onBack,
  onEntitySelect,
  onShowEvidence
}) => {
  const getEntityById = (id: string) => {
    const peopleEntity = ENTITY_DATA.canonical_entities.people[id];
    if (peopleEntity) {
      return { ...peopleEntity, type: "person", id };
    }

    const companyEntity = ENTITY_DATA.canonical_entities.companies[id];
    if (companyEntity) {
      return { ...companyEntity, type: "company", id };
    }

    return null;
  };

  const getEntityQuotes = (entityId: string) => {
    return ENTITY_DATA.excerpts.filter(excerpt => excerpt.speaker === entityId);
  };

  const getEntityMentions = (entityId: string) => {
    return ENTITY_DATA.excerpts.filter(excerpt =>
      excerpt.mentioned_entities.includes(entityId) && excerpt.speaker !== entityId
    );
  };

  const getEntityRelationships = (entityId: string) => {
    return ENTITY_DATA.relationships.filter(
      rel => rel.subject === entityId || rel.object === entityId
    );
  };

  const formatRelationshipText = (relationship: any, currentEntityId: string) => {
    const isSubject = relationship.subject === currentEntityId;
    const otherEntityId = isSubject ? relationship.object : relationship.subject;
    const otherEntity = getEntityById(otherEntityId);
    const otherEntityName = otherEntity?.canonical_name || otherEntityId;

    const temporal = relationship.temporal ? ` [${relationship.temporal}]` : '';

    switch (relationship.type) {
      case 'co_founded':
        return isSubject
          ? `Co-founded ${otherEntityName}${temporal}`
          : `Co-founded by ${otherEntityName}${temporal}`;
      case 'worked_at':
        return isSubject
          ? `Worked at ${otherEntityName}${temporal}`
          : `Employed ${otherEntityName}${temporal}`;
      case 'advisor_to':
        return isSubject
          ? `Advisor to ${otherEntityName}${temporal}`
          : `Advised by ${otherEntityName}${temporal}`;
      case 'friends_with':
        return `Friends with ${otherEntityName}${temporal}`;
      default:
        return `${relationship.type.replace('_', ' ')} ${otherEntityName}${temporal}`;
    }
  };

  const entity = getEntityById(entityId);
  const quotes = getEntityQuotes(entityId);
  const mentions = getEntityMentions(entityId);
  const relationships = getEntityRelationships(entityId);

  if (!entity) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 max-w-4xl">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="p-2 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Graph
          </Button>
        </div>

        {/* Entity Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-semibold text-foreground">
              {entity.canonical_name}
            </h1>
            <Badge variant="outline" className="text-sm">
              {entity.type}
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            {entity.description}
          </p>
        </div>

        {/* Quotes Section - For all entities */}
        {(quotes.length > 0 || mentions.length > 0) && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Quote className="h-5 w-5" />
                Quotes & Mentions ({quotes.length + mentions.length})
              </CardTitle>
              <CardDescription>
                Direct quotes and mentions of {entity.canonical_name}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Direct Quotes Section */}
              {quotes.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                    Direct Quotes ({quotes.length})
                  </h3>
                  <div className="space-y-6">
                    {quotes.map((quote) => (
                      <div key={quote.id} className="border-l-4 border-blue-500 pl-6 py-4">
                        <blockquote className="text-foreground mb-4 text-base leading-relaxed italic">
                          "<RichText text={quote.quote_text} className="inline" />"
                        </blockquote>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div className="flex items-center justify-between">
                            <div>Source: {quote.source.date} • {quote.source.timestamp}</div>
                            <SmartEmbed url={quote.source.url} />
                          </div>
                          <div>Context: {quote.context}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mentions Section */}
              {mentions.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                    Mentions ({mentions.length})
                  </h3>
                  <div className="space-y-6">
                    {mentions.map((mention) => {
                      const speaker = getEntityById(mention.speaker);
                      const speakerName = speaker?.canonical_name || mention.speaker;

                      return (
                        <div key={mention.id} className="border-l-4 border-green-500 pl-6 py-4">
                          <blockquote className="text-foreground mb-4 text-base leading-relaxed italic">
                            "<RichText text={mention.quote_text} className="inline" />"
                          </blockquote>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="font-medium">Speaker:</span> {speakerName} • {mention.source.date} • {mention.source.timestamp}
                              </div>
                              <SmartEmbed url={mention.source.url} />
                            </div>
                            <div>Context: {mention.context}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Relationships Section */}
        {relationships.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Relationships ({relationships.length})</CardTitle>
              <CardDescription>
                Connections with other entities backed by evidence
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {relationships.map((rel) => {
                const otherEntityId = rel.subject === entityId ? rel.object : rel.subject;
                const otherEntity = getEntityById(otherEntityId);

                return (
                  <div
                    key={rel.id}
                    className="border border-border rounded-lg p-4 cursor-pointer transition-colors hover:bg-muted/50"
                    onClick={() => onEntitySelect(otherEntityId)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-foreground mb-2">
                          {formatRelationshipText(rel, entityId)}
                        </div>
                        {rel.role && (
                          <div className="text-sm text-muted-foreground mb-2">
                            Role: {rel.role}
                          </div>
                        )}
                        {rel.duration && (
                          <div className="text-sm text-muted-foreground">
                            Duration: {rel.duration}
                          </div>
                        )}
                      </div>
                      {rel.evidence_excerpts && rel.evidence_excerpts.length > 0 && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            onShowEvidence(rel);
                          }}
                          className="ml-4"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Evidence ({rel.evidence_excerpts.length})
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default EntityPage;