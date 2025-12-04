'use client';

import { ChevronLeft, ChevronRight, RotateCcw, Wand2, ZoomIn, ZoomOut } from 'lucide-react';

export function CanvasToolbar() {
  return (
    <div className="flex-none flex items-center justify-between w-full mb-4">
      {/* Page Navigation */}
      <div className="flex items-center gap-2 rounded-lg bg-surface-dark p-1 shadow-lg border border-border-dark">
        <button className="flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-border-dark">
          <ChevronLeft size={20} />
        </button>
        <div className="text-sm px-2 text-muted-dark">
          Page <span className="text-white font-medium">1</span> / 4
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-border-dark">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Canvas Controls */}
      <div className="flex items-center gap-1 rounded-lg bg-surface-dark p-1 shadow-lg border border-border-dark">
        <button className="flex h-9 items-center justify-center rounded-md text-white hover:bg-border-dark px-3 gap-2">
          <Wand2 size={20} />
          <span>Avant/Après IA</span>
        </button>
        <div className="w-px h-5 bg-border-dark mx-1" />
        <button className="flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-border-dark">
          <ZoomIn size={20} />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-border-dark">
          <ZoomOut size={20} />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-border-dark">
          <RotateCcw size={20} />
        </button>
      </div>
    </div>
  );
}
