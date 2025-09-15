import { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const base = "border-b-2 border-transparent hover:border-orange-400";
  const active = "border-b-2 border-orange-400";

  return (
    <div className="border-b pb-[26px] border-black/15">
      <div className="container mx-auto mt-[25px] pl-2 pr-2">
        <div className="flex items-center justify-between">
    
          <NavLink to="/">
            <img src="/images/logo.svg" alt="logo" className="h-[32px]" />
          </NavLink>

          <div className="gap-[40px] flex mt-[7px] text-base font-semibold text-neutral-900 max-md:hidden">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${isActive ? active : base} w-[50px]`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? active : base} w-[51px]`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                `${isActive ? active : base} w-[65px]`
              }
            >
              Recipes
            </NavLink>
          </div>

       
          <button className="bg-neutral-900 text-white font-bold px-4 py-2 rounded-[10px] max-md:hidden">
            Browse recipes
          </button>

        
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <img src="/images/icon-hamburger-menu.svg" alt="menu" className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="flex flex-col gap-4 mt-4 md:hidden text-base font-semibold text-neutral-900">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${isActive ? active : base} w-[50px]`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${isActive ? active : base} w-[51px]`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/recipes"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${isActive ? active : base} w-[65px]`
              }
            >
              Recipes
            </NavLink>

            <button
              onClick={() => setOpen(false)}
              className="bg-neutral-900 text-white font-bold px-4 py-2 rounded-[10px]"
            >
              Browse recipes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
