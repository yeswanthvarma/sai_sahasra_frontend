import Image from "next/image";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="relative w-screen h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/home/BG.png')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row w-full h-full">
        {/* Left Section */}
        <div className="flex-1 flex flex-col md:justify-center items-start px-6 md:pl-16 md:text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight ">
        Connect your  Dreams with us
          </h1>
          <p className="text-base md:text-lg text-gray-300">Crafts with Uncompromising Quality in Every Detail.</p>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex items-center mb-8 md:mb-0 justify-center">
          <Image
            src="/images/home/Main.png"
            alt="City Skyline"
            width={600}
            height={600}
            className="rounded-lg shadow-lg object-contain max-h-[100%] md:max-h-[90%]"
          />
        </div>
      </div>

      {/* NavBar */}
      <div className="absolute bottom-0 w-full">
        <NavBar />
      </div>
    </div>
  );
}
