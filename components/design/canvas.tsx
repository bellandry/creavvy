'use client';

import { Crop, Filter, Layers as LayersIcon, LayoutDashboard, RotateCw } from 'lucide-react';
import { CanvasToolbar } from './canvas-toolbar';

export function Canvas() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-background-dark p-8">
      <div className="flex w-full flex-col h-full relative">
        <CanvasToolbar />
        
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div 
            className="bg-surface-dark w-full max-w-3xl aspect-square rounded-xl shadow-2xl flex items-center justify-center p-16 bg-cover bg-center" 
            style={{backgroundImage: 'linear-gradient(135deg, #1e132b, #2c1a3f)'}}
          >
            <div className="w-full h-full relative border-2 border-dashed border-border-dark rounded-lg flex items-center justify-center text-muted-dark flex-col gap-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-3/4 h-auto bg-center bg-no-repeat bg-contain shadow-lg" 
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9eIanouXvldawfG16xDaPkVfSMkOsZM6L03sfvetMJdkrqZWW2FuajheDIYaSlTCJCsfSff5ym8pKkzF5emgyvbboMpW-x263vYJSMxV3TD44wTSElq5FRIpy0bWul3B7lzdlctoGznreyPys7AD33Um3jm_HVNgG380-PMFN3nGfnyYWHK58XrOQKGAH_70Y7oV0bsyUcBXAeb-tAObbE2T_Lz-Jg0p2aUlxl7i-WnnuwkrojdHIHx2PTACKt0uCNKMlX9ODOmM")',
                    transform: 'rotate(-5deg) scale(0.9)'
                  }}
                >
                  <div className="w-full h-full pb-[75%]" />
                  
                  {/* Resize Handles */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-white border-2 border-primary cursor-nwse-resize" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-white border-2 border-primary cursor-nesw-resize" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-white border-2 border-primary cursor-nesw-resize" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-white border-2 border-primary cursor-nwse-resize" />
                  <div className="absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-white border-2 border-primary cursor-ew-resize -translate-y-1/2" />
                  <div className="absolute top-1/2 -right-2 w-4 h-4 rounded-full bg-white border-2 border-primary cursor-ew-resize -translate-y-1/2" />
                  <div className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-white border-2 border-primary cursor-ns-resize -translate-x-1/2" />
                  <div className="absolute -bottom-2 left-1/2 w-4 h-4 rounded-full bg-white border-2 border-primary cursor-ns-resize -translate-x-1/2" />
                  
                  {/* Rotation Handle */}
                  <div className="absolute -top-8 left-1/2 w-4 h-4 rounded-full bg-white border-2 border-primary cursor-grab -translate-x-1/2 flex items-center justify-center">
                    <RotateCw className="text-primary" size={12} strokeWidth={3} />
                  </div>
                </div>
              </div>
              
              {/* Canvas Tools */}
              <div className="absolute top-4 right-4 flex flex-col items-center gap-1 rounded-lg bg-surface-dark p-1 shadow-lg border border-border-dark">
                <button className="flex h-9 w-9 items-center justify-center rounded-md text-white bg-primary">
                  <Crop size={20} />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-border-dark">
                  <Filter size={20} />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-border-dark">
                  <LayersIcon size={20} />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-border-dark">
                  <LayoutDashboard size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
