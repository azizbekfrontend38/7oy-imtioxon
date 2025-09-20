import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Footer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // 1.2s loader
    return () => clearTimeout(timer);
  }, []);

  // variantlar
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col gap-10 my-20">
          {/* CTA skeleton */}
          <div className="relative grid h-[400px] rounded-2xl px-6 md:px-16 place-content-center text-center bg-neutral-200 overflow-hidden">
            <div className="skeleton h-8 w-2/3 mx-auto mb-6"></div>
            <div className="skeleton h-5 w-1/2 mx-auto mb-6"></div>
            <div className="skeleton h-10 w-40 mx-auto rounded-lg"></div>
          </div>

          {/* Footer bottom skeleton */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="skeleton h-5 w-40"></div>
            <div className="flex gap-6">
              <div className="skeleton h-6 w-6 rounded-full"></div>
              <div className="skeleton h-6 w-6 rounded-full"></div>
              <div className="skeleton h-6 w-6 rounded-full"></div>
              <div className="skeleton h-6 w-6 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="container mx-auto px-4 md:px-8 lg:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.section
        className="flex flex-col gap-10 my-20"
        variants={fadeUp}
        custom={0}
      >
        {/* --- CTA --- */}
        <motion.div
          className="relative grid h-[400px] rounded-2xl px-6 md:px-16 place-content-center text-center bg-neutral-200 overflow-hidden"
          variants={fadeUp}
          custom={1}
        >
          <img
            src="/images/pattern-fork.svg"
            alt=""
            className="lg:absolute left-[-80px] top-1/2 -translate-y-1/2 max-lg:hidden"
          />
          <img
            src="/images/pattern-knife.svg"
            alt=""
            className="lg:absolute right-[-50px] top-1/2 -translate-y-1/2 max-lg:hidden"
          />

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 relative z-10">
            Ready to cook smarter?
          </h2>
          <p className="text-neutral-700 text-lg md:text-xl leading-relaxed mb-8 relative z-10">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <NavLink to={"/recipes"}>
            <button
              className="bg-neutral-900 text-white rounded-lg px-5 py-2.5 text-base md:text-lg font-medium hover:bg-neutral-800 transition z-10 w-fit mx-auto"
            >
              Browse recipes
            </button>
          </NavLink>
        </motion.div>

        {/* --- Footer bottom --- */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          variants={fadeUp}
          custom={2}
        >
          <p className="text-gray-700">Made with ❤️ and 🥑</p>

          {/* Socials */}
          <span className="flex gap-6">
            <motion.a
              href="https://www.instagram.com/rahimberdiyev_1224"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              custom={3}
            >
              <img
                src="/images/icon-instagram.svg"
                alt="instagram"
                className="w-6 h-6 cursor-pointer"
              />
            </motion.a>

            <motion.img
              src="/images/icon-bluesky.svg"
              alt="bluesky"
              className="w-6 h-6 cursor-pointer"
              variants={fadeUp}
              custom={4}
            />

            <motion.a
              href="https://t.me/rahimberdiyevv"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              custom={5}
            >
              <img
                src="/images/images.png"
                alt="telegram"
                className="w-6 h-6 cursor-pointer"
              />
            </motion.a>

            <motion.a
              href="https://github.com/azizbekfrontend38"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              custom={6}
            >
              <img
                src="/images/GitHub-Icon.svg"
                alt="GitHub"
                className="w-6 h-6 cursor-pointer rounded-2xl"
              />
            </motion.a>
          </span>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default Footer;
