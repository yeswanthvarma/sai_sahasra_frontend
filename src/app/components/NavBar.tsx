import React from "react";

const NavBar: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="bg-[#D9D9D9] h-[35px] rounded-full shadow-md flex items-center px-4">
        <ul className="flex space-x-4 justify-center items-center">
          <li>
            <a
              href="#"
              className=" bg-[#F5F5F5] text-secondary-foreground rounded-full px-4 py-1 hover:bg-secondary/80"
            >
              On Going
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-muted-foreground rounded-full px-4 py-1 hover:bg-muted/80"
            >
              Completed
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-muted-foreground rounded-full px-4 py-1 hover:bg-muted/80"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-muted-foreground rounded-full px-4 py-1 hover:bg-muted/80"
            >
              More
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
