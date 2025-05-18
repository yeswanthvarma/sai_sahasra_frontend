export default function FutureProjects() {
  return (
    <div className="min-h-screen flex flex-col items-center  py-12 px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-[#2E3192] mb-8 text-center">
        Future Residential Projects
      </h1>
      <div className="bg-[#2E3192] rounded-2xl shadow-lg max-w-4xl w-full p-8 md:p-12 text-white">
        {/* First Row */}
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="flex-1 pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Hyderabad</h2>
            <p className="text-lg text-center md:text-left italic">Anjaneya Nagar Colony - 5 Flats</p>
          </div>
           <hr className="sm:border-white md:border-none mb-8 md:mb-0" />
          <div className="hidden md:block w-px bg-white mx-8 " />
          <div className="flex-1 pl-0 md:pl-8">
            <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Bhimavaram</h2>
            <p className="text-lg text-center md:text-left italic">Vamsi Krishna Nagar - 20 Flats</p>
          </div>
        </div>
        {/* Divider */}
        <div className="my-8">
          <hr className="border-white" />
        </div>
        {/* Second Row */}
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="flex-1 pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Vijayawada</h2>
            <p className="text-lg text-center md:text-left font-thin italic">Near Sitara Center - 15 Flats</p>
          </div>
          <hr className="sm:border-white md:border-none mb-8 md:mb-0" />
          <div className="hidden md:block w-px bg-white mx-8" />
          <div className="flex-1 pl-0 md:pl-8">
            <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Velagapudi</h2>
            <p className="text-lg text-center md:text-left italic">Near Secretariat</p>
          </div>
        </div>
      </div>
    </div>
  );
}