import { useEffect, useState } from "react";
import servingsIcon from "../../assets/images/icon-servings.svg";
import prepIcon from "../../assets/images/icon-prep-time.svg";
import cookIcon from "../../assets/images/icon-cook-time.svg";

export default function Recipes() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://json-api.uz/api/project/recipes/recipes")
            .then((res) => res.json())
            .then((req) => {
                console.log(req?.data);
                setData(req?.data);
            })
            .catch((err) => console.error("Error:", err));
    }, []);

    return (
        <div className="container mx-auto px-5 py-5 ">
            <div className=" lg:text-center max-w-[900px] mx-auto my-10 md:text-start">
                <h1 className=" lg:text-2 text-2-mobile font-extrabold text-neutral-900 mb-4">
                    Explore our simple, healthy recipes
                </h1>
                <p className="text-6 font-medium text-neutral-700">
                    Discover eight quick, whole-food dishes that fit real-life schedules and
                    taste amazing. Use the search bar to find a recipe by name or ingredient,
                    or simply scroll the list and let something delicious catch your eye.
                </p>
            </div>
           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 w-full">
  {/* Selectlar */}
  <div className="flex flex-col sm:flex-row gap-3 lg:w-auto order-1 md:order-none">
    <select defaultValue="Max Prep Time" className="select sm:w-auto lg:max-w-[181px]">
      <option disabled={true}>Max Prep Time</option>
      <option>0 minutes</option>
      <option>5 minutes</option>
      <option>10 minutes</option>
    </select>

    <select defaultValue="Max Cook Time" className="select sm:w-auto lg:max-w-[181px]">
      <option disabled={true}>Max Cook Time</option>
      <option>0 minutes</option>
      <option>5 minutes</option>
      <option>10 minutes</option>
      <option>15 minutes</option>
      <option>20 minutes</option>
    </select>
  </div>

  {/* Search input */}
  <label className="input flex items-center gap-2 lg:w-[300px] order-2 md:order-none">
    <svg
      className="h-5 w-5 opacity-50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2.5"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </g>
    </svg>
    <input
      type="search"
      required
      placeholder="Search"
      className="grow"
    />
  </label>
</div>


            <div className="container mx-auto px-5 py-5 grid lg:grid-cols-3 md:grid-cols-1 gap-8 mt-6">
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div
                            key={item.id}
                            className="bg-neutral-0 p-4 rounded-[10px] shadow-md"
                        >
                            {/* Image */}
                            {item?.image?.small && (
                                <picture>
                                    <source media="(max-width: 500px)" srcSet={item.image.large} />
                                    <img
                                        src={item.image.small}
                                        alt={item.title}
                                        className="rounded-[10px] w-full object-cover"
                                    />
                                </picture>
                            )}

                            {/* Title */}
                            <h2 className="text-lg font-bold mt-4 mb-2 text-neutral-900">
                                {item.title}
                            </h2>

                            {/* Description */}
                            <p className="text-sm text-neutral-800 max-w-[344px] line-clamp-2 mb-3">
                                {item.overview}
                            </p>

                            {/* Info block (Prep, Cook, Servings) */}
                            <div className="space-y-2 text-sm text-neutral-700">
                                <div className="flex gap-5 ">
                                    <p className="flex items-center gap-2">
                                        <img src={servingsIcon} alt="" className="w-5 h-5" />
                                        Servings: {item.servings}
                                    </p>
                                    <p className="flex items-center gap-2  ">
                                        <img src={prepIcon} alt="" className="w-5 h-5" />
                                        Prep: {item.prepMinutes} mins
                                    </p>
                                </div>
                                <p className="flex items-center gap-2">
                                    <img src={cookIcon} alt="" className="w-5 h-5" />
                                    Cook: {item.cookMinutes} mins
                                </p>
                            </div>

                            {/* Button */}
                            <button className="mt-4 py-3 w-full bg-neutral-900 text-neutral-0 font-semibold rounded-full hover:bg-neutral-700 transition">
                                View Recipe
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
