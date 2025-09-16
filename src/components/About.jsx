import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="container mx-auto px-5 py-10"
      initial="hidden"
      animate="visible"
    >
      {/* --- OUR MISSION --- */}
      <motion.div
        className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row lg:items-start mt-20 px-5 py-5 gap-10 lg:gap-16"
        variants={fadeUp}
        custom={0}
      >
        {/* Text Content */}
        <motion.div className="flex-1 lg:mt-20" variants={fadeUp} custom={1}>
          <span className="bg-orange-500 rounded-lg px-4 py-2 text-neutral-900 text-sm font-medium">
            Our mission
          </span>

          <h1 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-900 mb-6">
            Help more people cook nourishing meals, more often.
          </h1>

          <p className="text-base md:text-lg font-medium text-neutral-800 mb-4">
            Healthy Recipe Finder was created to prove that healthy eating can be
            convenient, affordable, and genuinely delicious.
          </p>
          <p className="text-base md:text-lg font-medium text-neutral-800">
            We showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </p>
        </motion.div>

        {/* Responsive Image */}
        <picture className="flex-1 flex justify-center lg:justify-end">
          <source media="(max-width: 500px)" srcSet="/images/image-about-our-mission-small.webp" />
          <img
            className="rounded-xl w-full max-w-md lg:max-w-lg object-cover"
            src="/images/image-about-our-mission-large.webp"
            alt="Our mission"
          />
        </picture>
      </motion.div>

      {/* --- WHY WE EXIST --- */}
      <motion.div
        className="lg:flex items-start justify-center gap-[64px] mt-[60px] lg:mt-[97px]"
        variants={fadeUp}
        custom={2}
      >
        <h2 className="lg:text-2 text-2-mobile font-extrabold lg:w-[372px]">
          Why we exist
        </h2>

        <div className="grid gap-6 max-w-xl mt-10 lg:mt-0">
          <motion.div className="flex gap-4" variants={fadeUp} custom={3}>
            <img src="/images/icon-bullet-point.svg" alt="" className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Cut through the noise.</h4>
              <p>
                The internet is bursting with recipes, yet most busy cooks still
                default to take-away or packaged foods. We curate a tight collection
                of fool-proof dishes so you can skip the scrolling and start cooking.
              </p>
            </div>
          </motion.div>
          <motion.div className="flex gap-4" variants={fadeUp} custom={4}>
            <img src="/images/icon-bullet-point.svg" alt="" className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Empower home kitchens.</h4>
              <p>
                When you control what goes into your meals, you control how you feel.
                Every recipe is built around unrefined ingredients and ready in about
                half an hour of active prep.
              </p>
            </div>
          </motion.div>
          <motion.div className="flex gap-4" variants={fadeUp} custom={5}>
            <img src="/images/icon-bullet-point.svg" alt="" className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Make healthy look good.</h4>
              <p>
                High-resolution imagery shows you exactly what success looks
                like—because we eat with our eyes first, and confidence matters.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* --- OUR FOOD PHILOSOPHY --- */}
      <motion.div
        className="lg:flex items-start justify-center gap-[64px] mt-[60px] lg:mt-[97px]"
        variants={fadeUp}
        custom={6}
      >
        <h2 className="lg:text-2 text-2-mobile font-extrabold lg:w-[375px]">
          Our food philosophy
        </h2>

        <div className="grid gap-6 max-w-xl mt-10 lg:mt-0">
          <motion.div className="flex gap-4" variants={fadeUp} custom={7}>
            <img src="/images/icon-bullet-point.svg" alt="" className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Whole ingredients first.</h4>
              <p>
                Fresh produce, grains, legumes, herbs, and quality fats form the
                backbone of every recipe.
              </p>
            </div>
          </motion.div>
          <motion.div className="flex gap-4" variants={fadeUp} custom={8}>
            <img src="/images/icon-bullet-point.svg" alt="" className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Flavor without compromise.</h4>
              <p>
                Spices, citrus, and natural sweetness replace excess salt, sugar,
                and additives.
              </p>
            </div>
          </motion.div>
          <motion.div className="flex gap-4" variants={fadeUp} custom={9}>
            <img src="/images/icon-bullet-point.svg" alt="" className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Respect for time.</h4>
              <p>
                Weeknight meals should slot into real schedules; weekend cooking
                can be leisurely but never wasteful.
              </p>
            </div>
          </motion.div>
          <motion.div className="flex gap-4" variants={fadeUp} custom={10}>
            <img src="/images/icon-bullet-point.svg" alt="" className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Sustainable choices.</h4>
              <p>
                Short ingredient lists cut down on food waste and carbon footprint,
                while plant-forward dishes keep things planet-friendly.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* --- BEYOND THE PLATE --- */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between text-gray-800 mt-[97px] gap-10 px-6"
        variants={fadeUp}
        custom={11}
      >
        {/* Chap taraf */}
        <motion.div className="lg:w-1/2 max-w-xl" variants={fadeUp} custom={12}>
          <h2 className="lg:text-2 text-2-mobile font-bold text-green-900 mb-4">
            Beyond the plate
          </h2>
          <p className="mb-4 text-base">
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Encourage family dinners and social cooking.</li>
            <li>Reduce reliance on single-use packaging and delivery waste.</li>
            <li>Spark curiosity about seasonal produce and local agriculture.</li>
          </ul>
        </motion.div>

        {/* O‘ng taraf */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <picture className="w-full max-w-[700px] lg:max-w-[800px]">
            <source
              media="(max-width: 500px)"
              srcSet="/images/image-about-beyond-the-plate-small.webp"
            />
            <img
              width={844}
              height={400}
              src="/images/image-about-beyond-the-plate-large.webp"
              alt="Beyond the plate"
              className="rounded-xl w-full object-cover"
            />
          </picture>
        </div>
      </motion.div>
    </motion.div>
  );
}
