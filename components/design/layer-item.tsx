import { Eye, EyeOff, GripVertical, Lock, LockOpen, LucideIcon } from 'lucide-react';

interface LayerItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  isVisible?: boolean;
  isLocked?: boolean;
  onVisibilityToggle?: () => void;
  onLockToggle?: () => void;
  onClick?: () => void;
}

export function LayerItem({ 
  icon: Icon, 
  label, 
  isActive = false, 
  isVisible = true, 
  isLocked = false,
  onVisibilityToggle,
  onLockToggle,
  onClick
}: LayerItemProps) {
  const baseClasses = "flex items-center gap-2 rounded-lg px-3 py-2 cursor-pointer";
  const activeClasses = isActive 
    ? "bg-primary/20 border border-primary" 
    : "hover:bg-border-dark";
  const textColor = isActive ? "text-white" : "text-muted-dark";

  return (
    <div className={`${baseClasses} ${activeClasses}`} onClick={onClick}>
      <GripVertical className="text-white cursor-grab" size={20} />
      <div className="flex-1 flex items-center gap-2">
        <Icon className={textColor} size={18} />
        <p className={`${textColor} text-sm font-medium leading-normal truncate`}>{label}</p>
      </div>
      <div className="flex items-center gap-1">
        <button 
          className={`flex h-6 w-6 items-center justify-center rounded-md ${textColor} hover:bg-white/10 ${isActive ? 'hover:text-white' : 'hover:text-white'}`}
          onClick={(e) => {
            e.stopPropagation();
            onVisibilityToggle?.();
          }}
        >
          {isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
        </button>
        <button 
          className={`flex h-6 w-6 items-center justify-center rounded-md ${textColor} hover:bg-white/10 ${isActive ? 'hover:text-white' : 'hover:text-white'}`}
          onClick={(e) => {
            e.stopPropagation();
            onLockToggle?.();
          }}
        >
          {isLocked ? <Lock size={16} /> : <LockOpen size={16} />}
        </button>
      </div>
    </div>
  );
}
