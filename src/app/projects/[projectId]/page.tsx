'use client'
import Image from "next/image";
import { useState } from "react";

export default function ProjectDetails() {
  // Example images array
  const images = [
    "/images/project-image.png",
    "/images/home/Main.png",
  ];
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4">
      <div className="flex flex-col md:flex-row gap-2 max-w-6xl w-full">
        {/* Left: Project Image */}
        <div className="w-full lg:w-2/5 flex items-start">
          <div className="relative group w-[400px] h-[400px] flex items-center">
            <LeftArrow onClick={handlePrev} />
            {/* Images */}
            <div className="w-[400px] h-[400px] flex items-center justify-center cursor-zoom-in">
              <Image
                src={images[current]}
                alt="Sai Golden Avenue"
                fill
                className="w-full h-full rounded-2xl shadow-2xl shadow-[#2E3192]/40 overflow-hidden"
                priority
                onClick={() => setShowModal(true)}
                sizes="400px"
              />
            </div>
            <RightArrow onClick={handleNext} />
          </div>
        </div>
        {/* Right: Project Content */}
        <div className="w-full lg:w-3/5 flex flex-col justify-start">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2E3192] my-4">
            Sai Golden Avenue
          </h2>
          <div className="mb-6 text-[#2E3192] text-base md:text-md">
            Sai Golden Avenue is a residential apartment complex in Nizampet, Hyderabad, developed by V.S. Homes And Resorts Pvt. Ltd.. The project offers 40 apartments, with options for 2 and 3-bedroom units. The total built-up area is 65,000 square feet. The complex is located on Nizampet Road. You can also find Sai Golden Avenue on{" "}
            <a href="https://www.zapkey.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">Zapkey</a> and{" "}
            <a href="https://www.99acres.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">99 Acres</a>
          </div>
          <div>
            <h3 className="font-semibold text-[#2E3192] mb-2">Key Location Highlights:</h3>
            <ul className="list-disc pl-5 text-[#2E3192] text-base space-y-1">
              <li>Just 15 minutes from Gannavaram Airport.</li>
              <li>A convenient 20-minute drive to Vijayawada Railway Station.</li>
              <li>Easily accessible within 20 minutes from Vijayawada Bus Station.</li>
              <li>Just 15 minutes from Gannavaram Airport.</li>
              <li>A convenient 20-minute drive to Vijayawada Railway Station.</li>
              <li>Easily accessible within 20 minutes from Vijayawada Bus Station.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Modal for big image */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setShowModal(false)}>
          <div className="relative">
            <Image
              src={images[current]}
              alt="Sai Golden Avenue Large"
              width={700}
              height={700}
              className="rounded-2xl shadow-2xl object-contain max-h-[80vh] max-w-[90vw]"
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <svg width="24" height="24" fill="none" stroke="#2E3192" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Left Arrow Button Component
function LeftArrow({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  return (
    <button
      className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
      onClick={onClick}
      aria-label="Previous image"
      type="button"
      disabled={disabled}
      tabIndex={-1}
    >
      <svg width="24" height="24" fill="none" stroke="#2E3192" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

// Right Arrow Button Component
function RightArrow({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  return (
    <button
      className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
      onClick={onClick}
      aria-label="Next image"
      type="button"
      disabled={disabled}
      tabIndex={-1}
    >
      <svg width="24" height="24" fill="none" stroke="#2E3192" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}