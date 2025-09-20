import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const base = "border-b-2 border-transparent hover:border-orange-400";
  const active = "border-b-2 border-orange-400";

  // Mobile link animatsiyasi
  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  if (loading) {
    return (
      <div className="border-b pb-[26px] border-black/15 fixed top-0 left-0 right-0 bg-neutral-100 z-[999]">
        <div className="container mx-auto mt-[25px] pl-2 pr-2">
          <div className="flex items-center justify-between">
            {/* Logo skeleton */}
            <div className="skeleton h-[32px] w-[100px] rounded-md"></div>

            {/* Desktop links skeleton */}
            <div className="hidden md:flex gap-[40px]">
              <div className="skeleton h-5 w-[50px]"></div>
              <div className="skeleton h-5 w-[51px]"></div>
              <div className="skeleton h-5 w-[65px]"></div>
            </div>

            {/* Desktop button skeleton */}
            <div className="hidden md:block">
              <div className="skeleton h-10 w-[140px] rounded-lg"></div>
            </div>

            {/* Hamburger skeleton */}
            <div className="md:hidden skeleton h-6 w-6 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="border-b pb-[26px] border-black/15 fixed top-0 left-0 right-0 bg-neutral-100 z-[999]"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto mt-[25px] pl-2 pr-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/">
            <motion.img
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              src="/images/logo.svg"
              alt="logo"
              className="h-[32px]"
            />
          </NavLink>

          {/* Desktop links */}
          <motion.div
            className="gap-[40px] flex mt-[7px] text-base font-semibold text-neutral-900 max-md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
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
          </motion.div>

          {/* Desktop button */}
          <NavLink to="/recipes">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-neutral-900 text-white font-bold px-4 py-2 rounded-[10px] max-md:hidden"
            >
              Browse recipes
            </motion.button>
          </NavLink>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <motion.img
              src="/images/icon-hamburger-menu.svg"
              alt="menu"
              className="h-6 w-6"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>

        {/* Mobile menu animatsiya bilan */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-4 mt-4 md:hidden text-base font-semibold text-neutral-900"
            >
              {[
                { to: "/", label: "Home", w: "w-[50px]" },
                { to: "/about", label: "About", w: "w-[51px]" },
                { to: "/recipes", label: "Recipes", w: "w-[65px]" },
              ].map((link, i) => (
                <motion.div
                  key={link.to}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={i}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `${isActive ? active : base} ${link.w}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              {/* CTA button mobile */}
              <motion.div
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={3}
              >
                <NavLink
                  to="/recipes"
                  onClick={() => setOpen(false)}
                  className="bg-neutral-900 text-white font-bold px-4 py-2 rounded-[10px]"
                >
                  Browse recipes
                </NavLink>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
