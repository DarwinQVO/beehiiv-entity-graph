import React, { useState } from "react";
import EntityGraph from "./components/EntityGraph";
import VisualGraph from "./components/VisualGraph";
import EntityPage from "./components/EntityPage";
import EvidenceModal from "./components/EvidenceModal";
import EntitySidebar from "./components/EntitySidebar";

type ViewMode = "cards" | "graph" | "entity";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewMode>("graph");
  const [selectedEntity, setSelectedEntity] = useState<string | null>(null);
  const [sidebarEntity, setSidebarEntity] = useState<string | null>(null);
  const [evidenceModal, setEvidenceModal] = useState<{
    isOpen: boolean;
    relationship: any;
  }>({
    isOpen: false,
    relationship: null
  });

  const handleEntitySelect = (entityId: string) => {
    setSelectedEntity(entityId);
    setCurrentView("entity");
  };

  const handleBackToCards = () => {
    setCurrentView("cards");
    setSelectedEntity(null);
    setSidebarEntity(null);
  };

  const handleBackToGraph = () => {
    setCurrentView("graph");
    setSelectedEntity(null);
  };

  const handleSidebarEntitySelect = (entityId: string) => {
    setSidebarEntity(entityId);
  };

  const handleCloseSidebar = () => {
    setSidebarEntity(null);
  };

  const handleViewFullDetails = (entityId: string) => {
    setSelectedEntity(entityId);
    setCurrentView("entity");
    setSidebarEntity(null);
  };

  const handleShowEvidence = (relationship: any) => {
    setEvidenceModal({
      isOpen: true,
      relationship
    });
  };

  const handleCloseEvidence = () => {
    setEvidenceModal({
      isOpen: false,
      relationship: null
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {currentView === "cards" && (
        <EntityGraph
          onEntitySelect={handleEntitySelect}
          onShowVisualGraph={() => setCurrentView("graph")}
        />
      )}

      {currentView === "graph" && (
        <VisualGraph
          onEntitySelect={handleEntitySelect}
          onBackToCards={handleBackToCards}
          onSidebarEntitySelect={handleSidebarEntitySelect}
        />
      )}

      {currentView === "entity" && selectedEntity && (
        <EntityPage
          entityId={selectedEntity}
          onBack={() => setCurrentView("graph")}
          onEntitySelect={handleEntitySelect}
          onShowEvidence={handleShowEvidence}
        />
      )}

      <EntitySidebar
        entityId={sidebarEntity}
        onClose={handleCloseSidebar}
        onViewFullDetails={handleViewFullDetails}
      />

      <EvidenceModal
        relationship={evidenceModal.relationship}
        isOpen={evidenceModal.isOpen}
        onClose={handleCloseEvidence}
      />
    </div>
  );
};

export default App;