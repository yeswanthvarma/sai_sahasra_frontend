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
    <div className="mt-8">
      <div className="bg-transparent text-center">
        <h3 className="text-sm md:text-lg font-semibold text-[#2E3192]">{title}</h3>
      </div>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-40  md:w-65">
        

        {/* Image Section */}
        <div className="relative w-full h-40 md:h-72 md:w-full border-2 bg-[#2E3192] border-[#2E3192]">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>

        {/* Description Section */}
        <div className="p-2 md:p-4 bg-[#2E3192] h-full">
            <p className="text-[0.5rem] sm:text-sm text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}
