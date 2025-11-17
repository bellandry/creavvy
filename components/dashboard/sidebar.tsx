import {
  Bookmark,
  LayoutDashboard,
  Library,
  PlusCircle,
  Settings,
} from "lucide-react";
import Logo from "../logo";
import { Avatar } from "../ui/avatar";

function Sidebar() {
  return (
    <div>
      <aside className="flex h-screen w-64 flex-col justify-between bg-white/5 dark:bg-black/20 p-4 border-r border-white/10 dark:border-black/20 sticky top-0">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 px-3">
            <div className="size-8 text-primary">
              <Logo />
            </div>
            <h1 className="text-white text-lg font-bold leading-normal">
              Snippet Studio
            </h1>
          </div>
          <nav className="flex flex-col gap-2">
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-white"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">
                <LayoutDashboard />
              </span>
              <p className="text-sm font-medium leading-normal">Dashboard</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">
                <PlusCircle />
              </span>
              <p className="text-sm font-medium leading-normal">
                Créer un visuel
              </p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">
                <Library />
              </span>
              <p className="text-sm font-medium leading-normal">
                Mes créations
              </p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">
                <Bookmark />
              </span>
              <p className="text-sm font-medium leading-normal">
                Mes templates
              </p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">
                <Settings />
              </span>
              <p className="text-sm font-medium leading-normal">Paramètres</p>
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3 p-3">
          <Avatar />
          {/* <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            data-alt="User avatar image"
            style={{
              backgroundImage: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSWyYgh2cztMXReplijeLacn_L0WqgqYjNoChwZHJHgoYhAVCvh1bHsFRU1dtMNhaIls9e8ZtQgy7-FDORW0bCmETBAUL6Is-_w22zH2-8CL4dP5pGDBPhX0MnRFNug5vRoa2GIuuE8Vz0cuSfjWw2amtJOaMOZDEahXLQuhMy4NW21vff7dGzi3RKhwKxNWHMPBt9HmiveXa_hYyGXtnUdzFzmroWkl_Z7CkByMxOlJtEpa35kXbAnMcuXNnZ7xRTh_-XIKwyfGE');
            }}
          ></div> */}
          <div className="flex flex-col">
            <h2 className="text-white text-sm font-medium leading-normal">
              Alex Durand
            </h2>
            <p className="text-gray-400 text-xs font-normal leading-normal">
              alex.d@email.com
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
