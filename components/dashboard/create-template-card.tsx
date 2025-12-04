import { Plus } from "lucide-react";

type CreateTemplateCardProps = {
  onClick?: () => void;
};

export function CreateTemplateCard({ onClick }: CreateTemplateCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-center w-full bg-white/5 aspect-video rounded-lg border-2 border-dashed border-white/10">
        <button
          className="flex items-center justify-center h-16 w-16 bg-primary rounded-full hover:opacity-90 transition-opacity"
          onClick={onClick}
        >
          <span className="material-symbols-outlined text-white text-4xl">
            <Plus />
          </span>
        </button>
      </div>
      <div>
        <p className="text-white text-base font-medium leading-normal">
          Ajouter un template
        </p>
        <p className="text-gray-400 text-sm font-normal leading-normal">
          Créez un nouveau design
        </p>
      </div>
    </div>
  );
}
