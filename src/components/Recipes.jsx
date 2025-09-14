import React, { useEffect, useState } from "react";
import servingsIcon from "../../assets/images/icon-servings.svg";
import prepIcon from "../../assets/images/icon-prep-time.svg";
import cookIcon from "../../assets/images/icon-cook-time.svg";

export default function Recipes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://json-api.uz/api/project/recipes/recipes", {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.text(); // Avval text qilib olamiz
      })
      .then((text) => {
        // Agar server JSON yuborsa, parse qila olamiz
        try {
          const json = JSON.parse(text);
          if (json.data) {
            setData(json.data);
          } else {
            throw new Error("JSON da data fieldi yo‘q");
          }
        } catch (parseError) {
          console.error("JSON parse xatosi:", parseError, "Javob:", text);
          setError("Server JSON shaklida ma’lumot yubormadi");
        }
      })
      .catch((err) => {
        console.error("Fetch xatosi:", err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-5 py-5 ">
      <div className="lg:text-center max-w-[900px] mx-auto my-10 md:text-start">
        <h1 className="lg:text-2 text-2-mobile font-extrabold text-neutral-900 mb-4">
          Explore our simple, healthy recipes
        </h1>
        <p className="text-6 font-medium text-neutral-700">
          Discover quick, whole-food dishes that fit real-life schedules and taste amazing.
        </p>
      </div>
      <div className="container mx-auto px-5 py-5 grid lg:grid-cols-3 md:grid-cols-1 gap-8 mt-6">
        {data.map((item) => (
          <div key={item.id} className="bg-neutral-0 p-4 rounded-[10px] shadow-md">
            {item?.image?.small && (
              <picture>
                <source
                  media="(max-width: 500px)"
                  srcSet={item.image.large}
                />
                <img
                  src={item.image.small}
                  alt={item.title}
                  className="rounded-[10px] w-full object-cover"
                />
              </picture>
            )}
            <h2 className="text-lg font-bold mt-4 mb-2 text-neutral-900">
              {item.title}
            </h2>
            <p className="text-sm text-neutral-800 max-w-[344px] line-clamp-2 mb-3">
              {item.overview}
            </p>
            <div className="space-y-2 text-sm text-neutral-700">
              <div className="flex gap-5 ">
                <p className="flex items-center gap-2">
                  <img src={servingsIcon} alt="" className="w-5 h-5" />
                  Servings: {item.servings}
                </p>
                <p className="flex items-center gap-2">
                  <img src={prepIcon} alt="" className="w-5 h-5" />
                  Prep: {item.prepMinutes} mins
                </p>
              </div>
              <p className="flex items-center gap-2">
                <img src={cookIcon} alt="" className="w-5 h-5" />
                Cook: {item.cookMinutes} mins
              </p>
            </div>
            <button className="mt-4 py-3 w-full bg-neutral-900 text-neutral-0 font-semibold rounded-full hover:bg-neutral-700 transition">
              View Recipe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
