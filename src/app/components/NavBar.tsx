"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Routes: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About Us", path: "#" },
    { name: "Contact Us", path: "/contactUs" },
  ];

  const projectSubRoutes = [
    { name: "Future", path: "/projects/future" },
    { name: "On Going", path: "/projects/ongoing" },
    { name: "Completed", path: "/projects/completed" },
  ];

  return (
    <div className="bg-[#2E3192] h-[44px] rounded-full shadow-md flex items-center justify-center px-4 relative z-50">
      <ul className="flex space-x-4 justify-center items-center">
        {routes.map((route) => (
          <li key={route.path} className="relative">
            {route.name === "Projects" ? (
              <>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`px-2 md:px-4 py-2 rounded-2xl md:rounded-full text-[0.7rem] md:text-18 ${
                    pathname.startsWith(route.path)
                      ? "bg-[#9192C8] text-white font-semibold"
                      : "text-white hover:bg-secondary/80"
                  }`}
                >
                  {route.name}
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 -left-4 bg-[#D8D8FF] rounded-lg shadow-lg w-30 z-50">
                    <ul className="flex flex-col">
                      {projectSubRoutes.map((subRoute) => (
                        <li
                          key={subRoute.path}
                          className="border-b border-white last:border-none"
                        >
                          <button
                            onClick={() => {
                              setIsDropdownOpen(false);
                              router.push(subRoute.path);
                            }}
                            className="w-full text-center px-4 py-2 text-[#2E3192] hover:bg-[#B0B0FF]"
                          >
                            {subRoute.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={() => router.push(route.path)}
                className={`px-2 md:px-4 py-2 rounded-2xl md:rounded-full text-[0.7rem] md:text-18 ${
                  pathname === route.path
                    ? "bg-[#9192C8] text-white font-semibold"
                    : "text-white hover:bg-secondary/80"
                }`}
              >
                {route.name}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const NavBar: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-[60px] gap-2 md:gap-0">
      {/* Logo Section */}
      <div className="flex items-center mt-6 px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3">
        <Image
          src="/images/Logo.png"
          alt="Sai Sahasra Homes Logo"
          width={100}
          height={100}
          className="h-8 w-auto"
        />
      </div>

      {/* Routes Section */}
      <div className="px-2 py-2 mt-6 md:px-4 md:py-2 lg:px-6 lg:py-3 w-full md:w-auto">
        <Routes />
      </div>
    </div>
  );
};

export default NavBar;
