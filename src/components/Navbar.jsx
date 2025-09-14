import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import hamburgerIcon from "../../assets/images/icon-hamburger-menu.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const base = "border-b-2 border-transparent hover:border-orange-400";
  const active = "border-b-2 border-orange-400";

  return (
    <div className="border-b pb-[26px] border-black/15">
      <div className="container mx-auto mt-[25px] pl-2 pr-2 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img src={logo} alt="logo" />

          {/* Desktop links */}
          <div className="gap-[40px] flex mt-[7px] text-7 font-semibold text-neutral-900 max-md:hidden">
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

          {/* Desktop button */}
          <button className="bg-neutral-900 text-5 text-neutral-0 font-bold px-[16px] py-[12px] rounded-[10px] max-md:hidden">
            Browse recipes
          </button>

          {/* Hamburger button (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="text-5 text-neutral-0 font-bold px-[16px] py-[12px] rounded-[10px] md:hidden"
          >
            <img src={hamburgerIcon} alt="menu" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="flex flex-col gap-4 mt-4 md:hidden text-7 font-semibold">
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

            {/* Button in mobile menu */}
            <button
              onClick={() => setOpen(false)}
              className="bg-neutral-900 text-neutral-0 font-bold px-[16px] py-[12px] rounded-[10px]"
            >
              Browse recipes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
