import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div>
      <div className="bg-transparent text-center py-2">
        <h3 className="text-lg font-bold text-blue-700">{title}</h3>
      </div>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-60 md:w-65 ">
        

        {/* Image Section */}
        <div className="relative w-full h-72 border-2 bg-blue-500 border-blue-500">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>

        {/* Description Section */}
        <div className="p-4 bg-blue-500">
          <p className="text-sm text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}
