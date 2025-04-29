import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "HYD",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrl: "/images/project-image.png",
    },
    {
      title: "Label",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrl: "/images/project-image.png",
    },
    {
      title: "Label",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrl: "/images/project-image.png",
    },
    {
      title: "Label",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrl: "/images/project-image.png",
    },
    {
      title: "Label",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrl: "/images/project-image.png",
    },
    {
      title: "Label",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrl: "/images/project-image.png",
    },
    {
      title: "Label",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrl: "/images/project-image.png",
    },
    {
      title: "Label",
      description:
        "Experience luxury and comfort in this beautifully designed 3-bedroom apartment located in the heart of the city. Featuring spacious interiors, a modular kitchen, and a private balcony with stunning views.",
      imageUrl: "/images/project-image.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FF] flex flex-col items-center py-8 px-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Projects</h1>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>

      {/* NavBar */}
      <div className="absolute bottom-0 w-full">
        {/* Assuming NavBar is already implemented */}
      </div>
    </div>
  );
}