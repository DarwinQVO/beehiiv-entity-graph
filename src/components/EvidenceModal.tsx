import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ENTITY_DATA } from "@/data/entityData";
import { Quote, ExternalLink } from "lucide-react";
import RichText from "./RichText";
import SmartEmbed from "./SmartEmbed";

interface EvidenceModalProps {
  relationship: any;
  isOpen: boolean;
  onClose: () => void;
}

const EvidenceModal: React.FC<EvidenceModalProps> = ({
  relationship,
  isOpen,
  onClose
}) => {
  if (!relationship) return null;

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

  const formatRelationshipText = (relationship: any) => {
    const subjectEntity = getEntityById(relationship.subject);
    const objectEntity = getEntityById(relationship.object);

    const subjectName = subjectEntity?.canonical_name || relationship.subject;
    const objectName = objectEntity?.canonical_name || relationship.object;

    const temporal = relationship.temporal ? ` [${relationship.temporal}]` : '';

    switch (relationship.type) {
      case 'co_founded':
        return `${subjectName} co-founded ${objectName}${temporal}`;
      case 'worked_at':
        return `${subjectName} worked at ${objectName}${temporal}`;
      case 'advisor_to':
        return `${subjectName} is advisor to ${objectName}${temporal}`;
      case 'friends_with':
        return `${subjectName} is friends with ${objectName}${temporal}`;
      default:
        return `${subjectName} ${relationship.type.replace('_', ' ')} ${objectName}${temporal}`;
    }
  };

  const evidenceExcerpts = relationship.evidence_excerpts
    .map((excerptId: string) =>
      ENTITY_DATA.excerpts.find(e => e.id === excerptId)
    )
    .filter(Boolean);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Evidence for Relationship</DialogTitle>
          <DialogDescription>
            Supporting excerpts that establish this relationship
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Relationship Summary */}
          <div className="p-4 bg-muted rounded-lg">
            <div className="font-medium text-foreground">
              {formatRelationshipText(relationship)}
            </div>
            {relationship.role && (
              <div className="text-sm text-muted-foreground mt-1">
                Role: {relationship.role}
              </div>
            )}
            {relationship.duration && (
              <div className="text-sm text-muted-foreground mt-1">
                Duration: {relationship.duration}
              </div>
            )}
          </div>

          {/* Evidence Excerpts */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Quote className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-semibold">Supporting Evidence</h3>
              <Badge variant="secondary">
                {evidenceExcerpts.length} excerpt{evidenceExcerpts.length !== 1 ? 's' : ''}
              </Badge>
            </div>

            {evidenceExcerpts.map((excerpt) => (
              <div key={excerpt.id} className="border border-border rounded-lg p-6">
                <blockquote className="text-foreground mb-4 text-base leading-relaxed italic border-l-4 border-muted pl-4">
                  "<RichText text={excerpt.quote_text} className="inline" />"
                </blockquote>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Speaker:</span>
                    <Badge variant="outline" className="text-xs">
                      {getEntityById(excerpt.speaker)?.canonical_name || excerpt.speaker}
                    </Badge>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-medium">Source:</span> {excerpt.source.date} • {excerpt.source.timestamp}
                      </div>
                      <SmartEmbed url={excerpt.source.url} />
                    </div>
                  </div>

                  <div>
                    <span className="font-medium">Context:</span> {excerpt.context}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {evidenceExcerpts.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No evidence excerpts available for this relationship.
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EvidenceModal;