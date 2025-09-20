import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading (2s)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-5 font-nunito mt-30">
      {loading ? (
        // --- Skeleton UI ---
        <div className="flex flex-col gap-10">
          {/* Hero skeleton */}
          <div className="flex flex-col gap-4 items-center text-center">
            <div className="skeleton h-10 w-72"></div> {/* h1 */}
            <div className="skeleton h-5 w-96"></div> {/* paragraph */}
            <div className="skeleton h-12 w-40 mt-5"></div> {/* button */}
          </div>

          <div className="skeleton h-[300px] w-full rounded-[15px]"></div> {/* hero image */}

          {/* Cards skeleton */}
          <div className="grid lg:grid-cols-3 max-md:grid-cols-1 gap-6">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="skeleton h-16 w-16 rounded-[12px]"></div> {/* icon */}
                  <div className="skeleton h-6 w-40"></div> {/* title */}
                  <div className="skeleton h-4 w-full"></div> {/* text */}
                  <div className="skeleton h-4 w-5/6"></div>
                </div>
              ))}
          </div>

          {/* Built for real life skeleton */}
          <div className="flex max-lg:flex-col gap-8">
            <div className="flex-1 flex flex-col gap-4">
              <div className="skeleton h-7 w-64"></div> {/* section title */}
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-5/6"></div>
              <div className="skeleton h-4 w-3/4"></div>
            </div>
            <div className="skeleton h-[250px] w-full rounded-[20px]"></div> {/* image */}
          </div>
        </div>
      ) : (
        // --- Asl content ---
        <div className="lg:text-center">
          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h1 className="lg:text-1 md:text-1-tablet text-1-mobile font-extrabold leading-[110%] mb-[12px]">
              <span className="relative inline-block">
                Healthy
                <span className="rounded-[8px] absolute left-0 bottom-0 w-full h-1/2 bg-orange-500 -z-10" />
              </span>{" "}
              meals, zero fuss
            </h1>
            <p className="text-6 font-medium text-neutral-800">
              Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-[40px] bg-neutral-900 text-neutral-0 px-6 py-3 rounded-lg font-bold"
            >
              Start exploring
            </motion.button>
          </motion.div>

          {/* Hero image */}
          <motion.section
            className="mt-8 bg-neutral-0 px-5 py-5 rounded-[15px] mb-[90px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <picture>
              <source media="(max-width: 500px)" srcSet="/images/image-home-hero-small.webp" />
              <img
                src="/images/image-home-hero-large.webp"
                alt="hero"
                className="w-full object-cover rounded-[15px]"
              />
            </picture>
          </motion.section>
        </div>
      )}

      {/* Cards */}
      {!loading && (
        <motion.div
          className="mb-[90px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <h2 className="text-center mb-[48px] lg:text-2 text-2-mobile font-extrabold text-neutral-900">
            What you’ll get
          </h2>
          <div className="grid lg:grid-cols-3 max-md:grid-cols-1">
            {[
              {
                img: "/images/icon-whole-food-recipes.svg",
                title: "Whole-food recipes",
                text: "Each dish uses everyday, unprocessed ingredients."
              },
              {
                img: "/images/icon-minimum-fuss.svg",
                title: "Minimum fuss",
                text: "All recipes are designed to make eating healthy quick and easy."
              },
              {
                img: "/images/icon-search-in-seconds.svg",
                title: "Search in seconds",
                text: "Filter by name or ingredient and jump straight to the recipe you need."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`mb-[32px] ${i > 0 ? "lg:ml-[32px]" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                viewport={{ once: false }}
              >
                <img
                  className="bg-neutral-0 px-[18px] py-[13px] rounded-[12px] mb-[24px]"
                  src={item.img}
                  alt={item.title}
                />
                <h4 className="text-3 font-bold text-neutral-900 lg:mb-[12px]">{item.title}</h4>
                <p className="text-6 font-medium text-neutral-800">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Built for real life */}
      {!loading && (
        <motion.div
          className="mb-[90px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <div className="flex justify-center items-center max-lg:flex-col">
            <div className="mb-9">
              <h3 className="lg:text-2 text-2-mobile font-extrabold">Built for real life</h3>
              <p className="text-6 font-medium mb-[20px]">
                Cooking shouldn’t be complicated. These recipes come in under{" "}
                <span className="relative inline-block">
                  30 minutes
                  <span className="rounded-[8px] absolute left-0 bottom-0 w-full h-1/2 md:bg-orange-500 -z-10" />
                </span>{" "}
                of active time, fit busy schedules, and taste good enough to repeat.
              </p>
              <p className="text-6 font-medium">
                Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.
              </p>
            </div>
            <motion.picture
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              className="lg:flex gap-[45px]"
            >
              <source media="(max-width: 500px)" srcSet="/images/image-home-real-life-small.webp" />
              <img
                className="rounded-[20px] w-full object-cover"
                src="/images/image-home-real-life-large.webp"
                alt="real life"
              />
            </motion.picture>
          </div>
        </motion.div>
      )}
    </div>
  );
}
