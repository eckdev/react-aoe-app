import React from "react";
import NavItem from "./navItem";

const Navbar = () => {
  return (
    <header className="body-font fixed z-50  w-full">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-center p-5 md:flex-row">
        <nav className="top-0 left-0 right-0 bg-transparent">
          <div className="space-x-4 flex rounded-full px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
            <NavItem link={'/'} label={'Home'} />
            <NavItem link={'/units'} label={'Units'} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
