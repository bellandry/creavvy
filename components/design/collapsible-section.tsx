import { ChevronDown, LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface CollapsibleSectionProps {
  icon: LucideIcon;
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export function CollapsibleSection({ icon: Icon, title, defaultOpen = false, children }: CollapsibleSectionProps) {
  return (
    <details className="flex flex-col py-2 group" open={defaultOpen}>
      <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 px-2 rounded-md hover:bg-border-dark">
        <div className="flex items-center gap-3">
          <Icon className="text-white" size={20} />
          <p className="text-white text-sm font-medium leading-normal">{title}</p>
        </div>
        <ChevronDown className="text-white group-open:rotate-180 transition-transform" size={20} />
      </summary>
      <div className="pt-2 px-2">
        {children}
      </div>
    </details>
  );
}
