type DashboardSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function DashboardSection({ title, children }: DashboardSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {children}
      </div>
    </div>
  );
}
