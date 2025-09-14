// src/pages/Home.jsx

// import heroSmall from "../images/image-home-hero-small.webp";
// import heroLarge from "../images/image-home-hero-large.webp";
// import iconWhole from "../images/icon-whole-food-recipes.svg";
// import iconFuss from "../images/icon-minimum-fuss.svg";
// import iconSearch from "../images/icon-search-in-seconds.svg";
// import lifeSmall from "../images/image-home-real-life-small.webp";
// import lifeLarge from "../images/image-home-real-life-large.webp";

import Recipes from "../components/Recipes.jsx";

export default function Home() {
  return (
    <div className="container mx-auto mt-[80px] px-5 font-nunito">
      <div className="lg:text-center">
        <div>
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
          <button className="mt-[40px] bg-neutral-900 text-neutral-0 px-6 py-3 rounded-lg font-bold">
            Start exploring
          </button>
        </div>

        {/* HERO SECTION */}
        <section className="mt-8 bg-neutral-0 px-5 py-5 rounded-[15px] mb-[90px]">
          <picture>
            <source media="(max-width: 500px)" srcSet="/images/image-home-hero-small.webp" />
            <img src="/images/image-home-hero-large.webp" alt="hero" className="w-full object-cover rounded-[15px]" />
          </picture>
        </section>
      </div>

      {/* WHAT YOU’LL GET */}
      <div className="mb-[90px]">
        <h2 className="text-center mb-[48px] lg:text-2 text-2-mobile font-extrabold text-neutral-900">
          What you’ll get
        </h2>
        <div className="grid lg:grid-cols-3 max-md:grid-cols-1">
          <div className="mb-[32px]">
            <img
              className="bg-neutral-0 px-[18px] py-[13px] rounded-[12px] mb-[24px]"
              src="/images/icon-whole-food-recipes.svg"
              alt="Whole food icon"
            />
            <h4 className="text-3 font-bold text-neutral-900 lg:mb-[12px]">
              Whole-food recipes
            </h4>
            <p className="text-6 font-medium text-neutral-800">
              Each dish uses everyday, unprocessed ingredients.
            </p>
          </div>
          <div className="lg:ml-[32px] mb-[32px]">
            <img
              className="bg-neutral-0 px-[10px] py-[9px] rounded-[12px] mb-[24px]"
              src="/images/icon-minimum-fuss.svg"
              alt="Minimum fuss icon"
            />
            <h4 className="text-3 font-bold text-neutral-900 lg:mb-[12px]">
              Minimum fuss
            </h4>
            <p className="text-6 font-medium text-neutral-800">
              All recipes are designed to make eating healthy quick and easy.
            </p>
          </div>
          <div className="lg:ml-[32px] mb-[32px]">
            <img
              className="bg-neutral-0 px-[10px] py-[10px] rounded-[12px] mb-[24px]"
              src="/images/icon-search-in-seconds.svg"
              alt="Search icon"
            />
            <h4 className="text-3 font-bold text-neutral-900 lg:mb-[12px]">
              Search in seconds
            </h4>
            <p className="text-6 font-medium text-neutral-800">
              Filter by name or ingredient and jump straight to the recipe you need.
            </p>
          </div>
        </div>
      </div>

      {/* BUILT FOR REAL LIFE */}
      <div className="mb-[90px]">
        <div className="flex justify-center items-center max-lg:flex-col">
          <div className="mb-9">
            <h3 className="lg:text-2 text-2-mobile font-extrabold">
              Built for real life
            </h3>
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
          <picture className="lg:flex gap-[45px]">
            <source media="(max-width: 500px)" srcSet="/images/image-home-real-life-small.webp" />
            <img className="rounded-[20px] w-full object-cover" src="/images/image-home-real-life-large.webp" alt="real life" />
          </picture>
        </div>
      </div>

     
    </div>
  );
}
