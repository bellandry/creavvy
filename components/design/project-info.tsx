interface ProjectInfoProps {
  title: string;
  status: string;
  iconUrl?: string;
}

export function ProjectInfo({ title, status, iconUrl }: ProjectInfoProps) {
  return (
    <div className="flex-none p-4 border-b border-border-dark">
      <div className="flex gap-3 items-center">
        <div 
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10" 
          data-alt="Abstract gradient for the current project icon" 
          style={{backgroundImage: `url("${iconUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYi1jlsbFepqx4SM7UriLMu9gZqrd89rTiIAhxKDAPVuNPzLMhgQmw5kNUUY504JuSMkUXBuHZDWPuj81OM4ZBYnvBSa4O7o5DZADWmy272zRJQeTNNOMN1KGWJRfmEmlopjfj8VAFD6Xwh2Ql5uk1J4UjG06IXfIGE05m3nhQPdQiP8C33nP7Mybp2Pp5eE4zFS0pBkA4isiFsgnjMToAs8EXv46B0EEP7pdSH0bHVy0W3Ze9BvVJtGOnLBfTUSNtmQdYB3Lanik"}'}`}}
        />
        <div className="flex flex-col">
          <h2 className="text-white text-base font-medium leading-normal">{title}</h2>
          <p className="text-muted-dark text-sm font-normal leading-normal">{status}</p>
        </div>
      </div>
    </div>
  );
}
