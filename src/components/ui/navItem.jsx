/* eslint-disable react/prop-types */
import React from "react";
import { useLocation } from "react-router-dom";

const NavItem = ({ link, label }) => {
  const { pathname } = useLocation();
  return (
    <a
      href={link}
      className={`${
        pathname === "/" ? "text-white" : "text-black"
      } relative block px-3 py-2 transition shrink-0  hover:text-zinc-500`}
    >
      {label}
      {pathname === link && (
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent"></span>
      )}
    </a>
  );
};

export default NavItem;
