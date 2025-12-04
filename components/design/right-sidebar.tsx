'use client';

import { Clock, Copy, Download, Edit, FolderArchive, Palette, Plus } from 'lucide-react';

export function RightSidebar() {
  return (
    <aside className="flex h-full w-[320px] flex-none flex-col border-l border-border-dark bg-surface-dark overflow-y-auto">
      {/* Preview Actions */}
      <div className="flex-none p-4 border-b border-border-dark flex flex-col gap-4">
        <h2 className="text-white text-base font-medium leading-normal">Aperçu final</h2>
        <div className="flex flex-col gap-2">
          <button className="w-full flex min-w-0 max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity">
            <span className="truncate">Générer visuel final</span>
          </button>
          <div className="flex gap-2">
            <button className="flex-1 flex min-w-0 max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-border-dark text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80 transition-opacity gap-2">
              <Download size={18} />
              <span className="truncate">PNG/WebP</span>
            </button>
            <button className="flex-1 flex min-w-0 max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-border-dark text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80 transition-opacity gap-2">
              <FolderArchive size={18} />
              <span className="truncate">Exporter (ZIP)</span>
            </button>
          </div>
          <button className="w-full flex min-w-0 max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 border border-border-dark text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-border-dark transition-colors">
            <span className="truncate">Sauvegarder comme template</span>
          </button>
        </div>
      </div>

      {/* Carousel Pages */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-border-dark">
          <h3 className="text-white text-sm font-medium leading-normal mb-3">Pages du carrousel</h3>
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <div 
              className="w-24 h-24 bg-border-dark rounded-md border-2 border-primary flex items-center justify-center text-sm text-primary font-semibold flex-shrink-0" 
              data-alt="Carousel page 1 thumbnail preview"
            >
              Page 1
            </div>
            <div 
              className="w-24 h-24 bg-border-dark rounded-md border border-transparent hover:border-muted-dark flex items-center justify-center text-sm text-muted-dark flex-shrink-0" 
              data-alt="Carousel page 2 thumbnail preview"
            >
              Page 2
            </div>
            <div 
              className="w-24 h-24 bg-border-dark rounded-md border border-transparent hover:border-muted-dark flex items-center justify-center text-sm text-muted-dark flex-shrink-0" 
              data-alt="Carousel page 3 thumbnail preview"
            >
              Page 3
            </div>
            <button className="w-10 h-24 bg-border-dark bg-opacity-50 hover:bg-opacity-100 rounded-md flex items-center justify-center text-muted-dark flex-shrink-0">
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* AI Prompt Used */}
        <div className="p-4 border-b border-border-dark">
          <h3 className="text-white text-sm font-medium leading-normal mb-2">Prompt IA utilisé</h3>
          <div className="relative">
            <p className="text-muted-dark text-xs p-3 bg-border-dark rounded-md pr-10">
              Génère une image de code pour un post Instagram sur les React Hooks, avec un fond dégradé violet.
            </p>
            <button className="absolute top-2 right-2 text-muted-dark hover:text-white">
              <Copy size={16} />
            </button>
          </div>
        </div>

        {/* Iteration History */}
        <div className="p-4 flex-1 flex flex-col min-h-0">
          <h3 className="text-white text-sm font-medium leading-normal mb-3">Historique d&apos;itérations</h3>
          <div className="flex-1 space-y-3 overflow-y-auto">
            <div className="flex items-center gap-3 p-2 rounded-md bg-border-dark cursor-pointer">
              <Clock className="text-muted-dark" size={18} />
              <div className="flex flex-col">
                <p className="text-white text-xs font-medium">État initial</p>
                <p className="text-muted-dark text-xs">il y a 1 min</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-border-dark cursor-pointer">
              <Edit className="text-muted-dark" size={18} />
              <div className="flex flex-col">
                <p className="text-white text-xs font-medium">Contenu modifié</p>
                <p className="text-muted-dark text-xs">il y a 30 sec</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-border-dark cursor-pointer">
              <Palette className="text-muted-dark" size={18} />
              <div className="flex flex-col">
                <p className="text-white text-xs font-medium">Couleur changée</p>
                <p className="text-muted-dark text-xs">il y a 15 sec</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
