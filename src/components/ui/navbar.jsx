import React from "react";

const Navbar = () => {
  return (
    <header className="body-font absolute z-50 flex flex-none flex-col text-gray-600 w-full">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-end p-5 md:flex-row">
      <nav className=" top-0 left-0 right-0 flex justify-between items-center p-4 bg-transparent">
        <div className="space-x-4">
          <a href="/" className="text-white font-bold text-lg">Home</a>
          <a href="/units" className="text-white font-bold text-lg">Units</a>
        </div>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
