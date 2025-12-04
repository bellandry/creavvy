'use client';

import { Circle, FileEdit, FileText, Hexagon, Image, Images, Layers, LayoutGrid, Megaphone, Palette, Settings, Sparkles, Type } from 'lucide-react';
import { CollapsibleSection } from './collapsible-section';
import { LayerItem } from './layer-item';
import { ProjectInfo } from './project-info';

interface LeftSidebarProps {
  projectTitle?: string;
  projectStatus?: string;
  projectIconUrl?: string;
}

export function LeftSidebar({ 
  projectTitle = "Mon nouveau visuel", 
  projectStatus = "Unsaved changes",
  projectIconUrl
}: LeftSidebarProps) {
  return (
    <aside className="flex h-full w-[320px] flex-none flex-col border-r border-border-dark bg-surface-dark overflow-y-auto">
      <ProjectInfo 
        title={projectTitle} 
        status={projectStatus} 
        iconUrl={projectIconUrl}
      />
      
      <div className="flex-1 p-2">
        {/* Type de post */}
        <CollapsibleSection icon={Layers} title="Type de post" defaultOpen>
          <div className="space-y-2">
            <select className="form-select flex w-full min-w-0 flex-1 rounded-lg text-white focus:outline-0 focus:ring-0 border border-border-dark bg-[#261933] focus:border-primary p-[9px] text-sm font-normal leading-normal">
              <option>Post Instagram (1080x1080)</option>
              <option>Story (1080x1920)</option>
              <option>Post X (1600x900)</option>
              <option>LinkedIn Post (1200x627)</option>
            </select>
          </div>
        </CollapsibleSection>

        {/* Mode de création */}
        <CollapsibleSection icon={Sparkles} title="Mode de création" defaultOpen>
          <div className="space-y-3">
            <div className="flex h-10 items-center justify-center rounded-lg bg-border-dark p-1">
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-surface-dark has-[:checked]:text-white text-muted-dark text-sm font-medium leading-normal">
                <span className="truncate">Manuel</span>
                <input defaultChecked className="invisible w-0" name="creation-mode" type="radio" value="Manual"/>
              </label>
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-surface-dark has-[:checked]:text-white text-muted-dark text-sm font-medium leading-normal">
                <span className="truncate">Prompt IA</span>
                <input className="invisible w-0" name="creation-mode" type="radio" value="AI Prompt"/>
              </label>
            </div>
            <textarea 
              className="form-input hidden w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-border-dark bg-[#261933] focus:border-primary min-h-24 placeholder:text-muted-dark p-[15px] text-sm font-normal leading-normal font-mono" 
              placeholder="Ex: Crée un post sur les hooks React..."
            />
          </div>
        </CollapsibleSection>

        {/* Contenu */}
        <CollapsibleSection icon={FileEdit} title="Contenu" defaultOpen>
          <div className="space-y-3">
            <div className="flex h-10 items-center justify-center rounded-lg bg-border-dark p-1">
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-surface-dark has-[:checked]:text-white text-muted-dark text-sm font-medium leading-normal">
                <span className="truncate">Snippet de code</span>
                <input defaultChecked className="invisible w-0" name="content-type" type="radio" value="code"/>
              </label>
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-surface-dark has-[:checked]:text-white text-muted-dark text-sm font-medium leading-normal">
                <span className="truncate">Capture d&apos;écran</span>
                <input className="invisible w-0" name="content-type" type="radio" value="screenshot"/>
              </label>
            </div>
            <input 
              className="form-input flex w-full min-w-0 flex-1 rounded-lg text-white focus:outline-0 focus:ring-0 border border-border-dark bg-[#261933] focus:border-primary placeholder:text-muted-dark p-[9px] text-sm font-normal leading-normal" 
              placeholder="Titre" 
              type="text"
            />
            <textarea 
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-border-dark bg-[#261933] focus:border-primary min-h-24 placeholder:text-muted-dark p-[15px] text-sm font-normal leading-normal" 
              placeholder="Description..."
            />
            <div>
              <textarea 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-border-dark bg-[#261933] focus:border-primary min-h-36 placeholder:text-muted-dark p-[15px] text-sm font-normal leading-normal font-mono" 
                placeholder="Paste your code here..."
              />
              <div className="grid grid-cols-2 gap-2 mt-3">
                <select className="form-select flex w-full min-w-0 flex-1 rounded-lg text-white focus:outline-0 focus:ring-0 border border-border-dark bg-[#261933] focus:border-primary p-[9px] text-sm font-normal leading-normal">
                  <option>JavaScript</option>
                  <option>Python</option>
                  <option>HTML</option>
                </select>
                <select className="form-select flex w-full min-w-0 flex-1 rounded-lg text-white focus:outline-0 focus:ring-0 border border-border-dark bg-[#261933] focus:border-primary p-[9px] text-sm font-normal leading-normal">
                  <option>Dracula</option>
                  <option>Monokai</option>
                  <option>Solarized Light</option>
                </select>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Calques */}
        <CollapsibleSection icon={LayoutGrid} title="Calques" defaultOpen>
          <div className="space-y-1">
            <LayerItem icon={Image} label="Capture d'écran" isActive isVisible />
            <LayerItem icon={Type} label="Titre" isVisible />
            <LayerItem icon={FileText} label="Description" isVisible isLocked />
            <LayerItem icon={Circle} label="Overlay: Flou" isVisible={false} />
            <LayerItem icon={Hexagon} label="Logo" isVisible />
          </div>
        </CollapsibleSection>

        {/* Style visuel */}
        <CollapsibleSection icon={Palette} title="Style visuel">
          <p className="text-muted-dark text-sm font-normal leading-normal pb-2">
            Style controls will be here.
          </p>
        </CollapsibleSection>

        {/* Branding et CTA */}
        <CollapsibleSection icon={Megaphone} title="Branding et CTA">
          <p className="text-muted-dark text-sm font-normal leading-normal pb-2">
            Branding options will be here.
          </p>
        </CollapsibleSection>

        {/* Options avancées */}
        <CollapsibleSection icon={Settings} title="Options avancées">
          <p className="text-muted-dark text-sm font-normal leading-normal pb-2">
            Advanced options will be here.
          </p>
        </CollapsibleSection>

        {/* Navigation carrousel */}
        <CollapsibleSection icon={Images} title="Navigation carrousel">
          <p className="text-muted-dark text-sm font-normal leading-normal pb-2">
            Carousel navigation will be here.
          </p>
        </CollapsibleSection>
      </div>
    </aside>
  );
}
