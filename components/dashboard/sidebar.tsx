"use client";

import { User } from "better-auth";
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Library,
  PlusCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

interface NavItem {
  href: string;
  icon: React.ReactNode;
  label: string;
}

// Helper function to get initial collapsed state
const getInitialCollapsedState = () => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("sidebarCollapsed");
    return saved === "true";
  }
  return false;
};

function Sidebar({ user }: { user: User }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<boolean>(getInitialCollapsedState);

  const toggleSidebar = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    localStorage.setItem("sidebarCollapsed", String(newState));
  };

  const navItems: NavItem[] = [
    {
      href: "/dashboard",
      icon: <LayoutDashboard />,
      label: "Dashboard",
    },
    {
      href: "/wizard",
      icon: <PlusCircle />,
      label: "Create Visual",
    },
    {
      href: "/creations",
      icon: <Library />,
      label: "My Creations",
    },
    {
      href: "/templates",
      icon: <Bookmark />,
      label: "My Templates",
    },
    {
      href: "/settings",
      icon: <Settings />,
      label: "Settings",
    },
  ];

  return (
    <div className="relative h-screen">
      <div
        className={`flex min-h-screen transition-all duration-300 sticky top-0 ${collapsed ? "hidden md:flex md:w-20" : "w-64"}`}
      >
        <aside className="flex flex-col justify-between bg-white/5 dark:bg-black/20 p-4 border-r border-white/10 dark:border-black/20 w-full">
          <div className="flex flex-col gap-6">
            <div
              className={`flex items-center relative ${collapsed ? "justify-center px-0" : "gap-3 px-3"}`}
            >
              <div className="size-8 text-primary">
                <Logo />
              </div>
              {!collapsed && (
                <h1 className="text-white text-lg font-bold leading-normal whitespace-nowrap">
                  Snippet Studio
                </h1>
              )}
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-primary/20 text-white"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl shrink-0">
                      {item.icon}
                    </span>
                    {!collapsed && (
                      <p className="text-sm font-medium leading-normal transition-all whitespace-nowrap">
                        {item.label}
                      </p>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center gap-3 p-3">
            <Avatar className="shrink-0">
              <AvatarImage
                src={user?.image || undefined}
                alt={user?.name || "User avatar"}
              />
              <AvatarFallback className="bg-primary/20 text-white">
                {user?.name?.charAt(0) || user?.email?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div className="flex flex-col min-w-0">
                <h2 className="text-white text-sm font-medium leading-normal truncate">
                  {user?.name || "User"}
                </h2>
                <p className="text-gray-400 text-xs font-normal leading-normal truncate">
                  {user?.email}
                </p>
              </div>
            )}
          </div>
        </aside>
      </div>

      <Button
        onClick={toggleSidebar}
        className="ml-auto top-4 z-10 -right-5 absolute bg-primary h-10 text-gray-100 hover:text-white transition-colors rounded-full"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight size={10} /> : <ChevronLeft size={10} />}
      </Button>
    </div>
  );
}

export default Sidebar;
