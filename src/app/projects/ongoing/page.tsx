"use client";
import { useRouter } from "next/navigation";
import ProjectCard from "@/app/components/ProjectCard";

export default function Projects() {
  const router = useRouter();

  const projects = [
    {
      id: "hyd",
      title: "HYD",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrls: [
        "/images/project-image.png",
        "/images/home/Main.png",
      ],
    },
    {
      id: "label1",
      title: "Label",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrls: [
        "/images/project-image.png",
        "/images/home/Main.png",
      ],
    },
    {
      id: "label2",
      title: "Label",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrls: [
        "/images/project-image.png",
        "/images/home/Main.png",
      ],
    },
    {
      id: "label3",
      title: "Label",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrls: [
        "/images/project-image.png",
        "/images/home/Main.png",
      ],
    },
    {
      id: "label4",
      title: "Label",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrls: [
        "/images/project-image.png",
        "/images/home/Main.png",
      ],
    },
    {
      id: "label5",
      title: "Label",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrls: [
        "/images/project-image.png",
        "/images/home/Main.png",
      ],
    },
    {
      id: "label6",
      title: "Label",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrls: [
        "/images/project-image.png",
        "/images/home/Main.png",
      ],
    },
    {
      id: "label7",
      title: "Label",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrls: [
        "/images/project-image.png",
        "/images/home/Main.png",
      ],
    },
  ];

  const handleCardClick = (project: typeof projects[0]) => {
    // Store the project data in sessionStorage before navigating
    if (typeof window !== "undefined") {
      sessionStorage.setItem("selectedProject", JSON.stringify(project));
      router.push(`/projects/${project.id}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-20">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2E3192] ">On Going Projects</h1>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-2 md:gap-8 ">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleCardClick(project)}
            className="cursor-pointer"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrls[0]} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}