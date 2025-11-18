import { Bell, Plus } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-white/10  px-10 py-4 sticky top-0 bg-background-dark/80 backdrop-blur-sm z-10">
      <div className="flex items-center gap-2">
        <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg hover:bg-white/5 lg:hidden">
          <span className="material-symbols-outlined text-white text-2xl">
            menu
          </span>
        </button>
        <p className="text-lg font-semibold text-white">Dashboard</p>
      </div>
      <div className="flex flex-1 justify-end gap-4">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2 hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined text-lg">
            <Plus />
          </span>
          <span className="truncate">Créer un nouveau visuel</span>
        </button>
        <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white/10  text-white hover:bg-white/30">
          <span className="material-symbols-outlined text-white text-xl">
            <Bell />
          </span>
        </button>
      </div>
    </header>
  );
}
