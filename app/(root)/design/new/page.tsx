'use client';

import { Canvas, DesignHeader, LeftSidebar, RightSidebar } from '@/components/design';

export default function DesignNewPage() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden">
      <DesignHeader />
      
      <main className="flex flex-1 overflow-hidden">
        <LeftSidebar 
          projectTitle="Mon nouveau visuel"
          projectStatus="Unsaved changes"
        />
        
        <Canvas />
        
        <RightSidebar />
      </main>
    </div>
  );
}
