import Image from "next/image";

type CreationCardProps = {
  title: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
};

export function CreationCard({ title, date, imageUrl, imageAlt }: CreationCardProps) {
  return (
    <div className="flex flex-col gap-3 group">
      <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt={imageAlt}
        />
      </div>
      <div>
        <p className="text-white text-base font-medium leading-normal">
          {title}
        </p>
        <p className="text-gray-400 text-sm font-normal leading-normal">
          {date}
        </p>
      </div>
    </div>
  );
}