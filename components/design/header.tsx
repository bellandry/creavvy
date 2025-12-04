import { Bell, Code2 } from 'lucide-react';
import Link from 'next/link';

export function DesignHeader() {
  return (
    <header className="flex h-[60px] flex-none items-center justify-between whitespace-nowrap border-b border-solid border-border-dark px-6">
      <div className="flex items-center gap-4 text-white">
        <Code2 className="text-2xl text-primary" size={24} />
        <h1 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Snippet Studio</h1>
      </div>
      
      <div className="hidden md:flex flex-1 justify-center gap-8">
        <div className="flex items-center gap-8">
          <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
            My Snippets
          </Link>
          <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
            Templates
          </Link>
          <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
            Community
          </Link>
          <Link className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
            Help
          </Link>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity">
          <span className="truncate">Upgrade</span>
        </button>
        <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-border-dark text-white">
          <Bell size={20} />
        </button>
        <div 
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" 
          data-alt="User avatar" 
          style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBACeLXOTFtoqLjreQ0h-mDwnKFAC472VA9zOJEbkyv_XebazF3jWm7CgN9yc0RnAL5jULvWLPVhxcnb1GI0b9x9LiOYZXY-xiBCqcGngd1ZfQxLRsoy01IKhfVID0mhYRNE-E234U6sbF_8ECPye8DEeRLrHlx6IrqLd7LXnMRooi9ihomWHqTEYn9yTS1j7MWjE8daxHrg3kD_1mLSkISz_G5tA26TZesc6Mc7-aO3SiD6yz5jWPjGZ5Ujlr2I2imfoMvnzntItQ")'}}
        />
      </div>
    </header>
  );
}
