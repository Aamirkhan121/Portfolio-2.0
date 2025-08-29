import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 
                    flex items-center justify-center 
                    bg-white/10 backdrop-blur-md border-b border-white/20 
                    shadow-lg z-50">
      <ul className="flex gap-8 text-black font-medium">
        {[
          { to: "/", label: "About" },
          { to: "/resume", label: "Resume" },
          { to: "/portfolio", label: "Portfolio" },
          { to: "/contact", label: "Contact" },
        ].map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `relative transition duration-300 
                 hover:text-blue-400
                 ${isActive ? "text-blue-400 font-semibold" : "text-black"}`
              }
            >
              {item.label}
              {/* Active underline effect */}
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] 
                           bg-blue-400 transition-all duration-300
                           group-hover:w-full"
              ></span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
