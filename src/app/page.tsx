import Image from "next/image";

export default function Home() {
  return (
      <div className="relative z-10 flex flex-col-reverse lg:flex-row pt-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col md:justify-center text-center md:items-start lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2E3195] leading-tight ">
            Crafts with Uncompromising Quality in Every Detail.
          </h1>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
          <Image
            src="/images/home/Main.png"
            alt="City Skyline"
            width={450}
            height={450}
            className="object-contain max-h-[100%] lg:max-h-[100%]"
          />
        </div>
      </div>
  );
}
