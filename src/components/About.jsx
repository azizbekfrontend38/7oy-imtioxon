// import small from "../../assets/images/image-about-our-mission-small.webp";
// import large from "../../assets/images/image-about-our-mission-large.webp";
// import bullet from "../../assets/images/icon-bullet-point.svg";
// import plate from "../../assets/images/image-about-beyond-the-plate-large.webp";
// import beyon from "../../assets/images/image-about-beyond-the-plate-small.webp";

export default function About() {
  return (
    <div className="container mx-auto px-5 py-10">
      {/* --- OUR MISSION --- */}
      <div className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row lg:items-start mt-20 px-5 py-5 gap-10 lg:gap-16">
        {/* Text Content */}
        <div className="flex-1 lg:mt-20">
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
        </div>

        {/* Responsive Image */}
        <picture className="flex-1 flex justify-center lg:justify-end">
          <source media="(max-width: 500px)" srcSet="/images/image-about-our-mission-small.webp" />
          <img
            className="rounded-xl w-full max-w-md lg:max-w-lg object-cover"
            src="/images/image-about-our-mission-large.webp"
            alt="Our mission"
          />
        </picture>
      </div>

      {/* --- WHY WE EXIST --- */}
      <div className="lg:flex items-start justify-center gap-[64px] mt-[60px] lg:mt-[97px]">
        <h2 className="lg:text-2 text-2-mobile font-extrabold lg:w-[372px]">
          Why we exist
        </h2>

        <div className="grid gap-6 max-w-xl mt-10 lg:mt-0">
          {[
            {
              title: "Cut through the noise.",
              text: "The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.",
            },
            {
              title: "Empower home kitchens.",
              text: "When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.",
            },
            {
              title: "Make healthy look good.",
              text: "High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-4">
              <img src="/images/icon-bullet-point.svg" alt="" className="w-6 h-6" />
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- OUR FOOD PHILOSOPHY --- */}
      <div className="lg:flex items-start justify-center gap-[64px] mt-[60px] lg:mt-[97px]">
        <h2 className="lg:text-2 text-2-mobile font-extrabold lg:w-[375px]">
          Our food philosophy
        </h2>

        <div className="grid gap-6 max-w-xl mt-10 lg:mt-0">
          {[
            {
              title: "Whole ingredients first.",
              text: "Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.",
            },
            {
              title: "Flavor without compromise.",
              text: "Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.",
            },
            {
              title: "Respect for time.",
              text: "Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.",
            },
            {
              title: "Sustainable choices.",
              text: "Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-4">
              <img src="/images/icon-bullet-point.svg" alt="" className="w-6 h-6" />
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- BEYOND THE PLATE --- */}
      <div className="flex flex-col lg:flex-row items-center justify-between text-gray-800 mt-[97px] gap-10 px-6">
        {/* Chap taraf */}
        <div className="lg:w-1/2 max-w-xl">
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
        </div>

        {/* O‘ng taraf */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <picture className="w-full max-w-[700px] lg:max-w-[800px]">
            <source media="(max-width: 500px)" srcSet="/images/image-about-beyond-the-plate-small.webp" />
            <img
              width={844}
              height={400}
              src="/images/image-about-beyond-the-plate-large.webp"
              alt="Beyond the plate"
              className="rounded-xl w-full object-cover"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
