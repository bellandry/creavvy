import { User } from "better-auth";
import { CreateTemplateCard } from "./create-template-card";
import { CreationCard } from "./creation-card";
import { DashboardSection } from "./dashboard-section";
import { TemplateCard } from "./template-card";
import { WelcomeSection } from "./welcome-section";

type HomeDashboardProps = {
  user: User;
};

export function HomeDashboard({ user }: HomeDashboardProps) {
  // Sample data for recent creations
  const recentCreations = [
    {
      id: 1,
      title: "React Component Snippet",
      date: "Créé le 15 juil. 2024",
      imageUrl: "https://images.unsplash.com/photo-1607706189992-eae578626c86",
      imageAlt: "Visual of a React component code snippet",
    },
    {
      id: 2,
      title: "API Fetch Example",
      date: "Créé le 14 juil. 2024",
      imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
      imageAlt: "Visual of an API fetch example code snippet",
    },
    {
      id: 3,
      title: "CSS Grid Layout",
      date: "Créé le 12 juil. 2024",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      imageAlt: "Template for Instagram posts",
    },
    {
      id: 4,
      title: "Python Data Function",
      date: "Créé le 10 juil. 2024",
      imageUrl: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6",
      imageAlt: "Visual of a Python data function code snippet",
    },
  ];

  // Sample data for saved templates
  const savedTemplates = [
    {
      id: 1,
      title: "Instagram Post Template",
      description: "Fond dégradé violet",
      imageUrl:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Template for Instagram posts",
    },
    {
      id: 2,
      title: "Twitter Code Snippet",
      description: "Thème carbone minimaliste",
      imageUrl:
        "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Template for Twitter/X code snippets",
    },
  ];

  const handleCreateTemplate = () => {
    // Placeholder for create template functionality
    console.log("Create template clicked");
  };

  return (
    <main className="w-full p-10 overflow-y-auto">
      <div className="flex flex-col w-full gap-10">
        <WelcomeSection user={user} />

        <DashboardSection title="Mes créations récentes">
          {recentCreations.map((creation) => (
            <CreationCard
              key={creation.id}
              title={creation.title}
              date={creation.date}
              imageUrl={creation.imageUrl}
              imageAlt={creation.imageAlt}
            />
          ))}
        </DashboardSection>

        <DashboardSection title="Templates sauvegardés">
          {savedTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              title={template.title}
              description={template.description}
              imageUrl={template.imageUrl}
              imageAlt={template.imageAlt}
            />
          ))}
          <CreateTemplateCard onClick={handleCreateTemplate} />
        </DashboardSection>
      </div>
    </main>
  );
}
