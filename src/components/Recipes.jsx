import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [maxPrep, setMaxPrep] = useState("");
  const [maxCook, setMaxCook] = useState("");

  useEffect(() => {
    fetch("https://68c6a361442c663bd0278d4c.mockapi.io/recipes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  // Filtrlash
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesPrep =
      !maxPrep || (recipe.prepMinutes && recipe.prepMinutes <= parseInt(maxPrep));

    const matchesCook =
      !maxCook || (recipe.cookMinutes && recipe.cookMinutes <= parseInt(maxCook));

    return matchesSearch && matchesPrep && matchesCook;
  });

  // Clear filters
  const handleClear = () => {
    setSearch("");
    setMaxPrep("");
    setMaxCook("");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Title */}
      <div className="text-center mb-12 max-w-md mx-auto">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-green-900 mb-4">
          Explore our simple, healthy recipes
        </h1>
        <p className="text-base text-gray-600">
          Discover quick, whole-food dishes that fit real-life schedules and taste amazing.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        {/* Selectlar + Clear */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <select
            value={maxPrep}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 w-full sm:w-auto"
            onChange={(e) => setMaxPrep(e.target.value)}
          >
            <option value="">Max Prep Time</option>
            <option value="5">5 mins</option>
            <option value="10">10 mins</option>
            <option value="20">20 mins</option>
          </select>

          <select
            value={maxCook}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 w-full sm:w-auto"
            onChange={(e) => setMaxCook(e.target.value)}
          >
            <option value="">Max Cook Time</option>
            <option value="10">10 mins</option>
            <option value="20">20 mins</option>
            <option value="30">30 mins</option>
          </select>

          <button
            onClick={handleClear}
            className="bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition w-full sm:w-auto"
          >
            Clear
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by name or ingredient..."
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-green-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Recipes List */}
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <picture>
                <source
                  media="(min-width:1024px)"
                  srcSet={recipe.image?.large?.replace("./", "/")}
                />
                <source
                  media="(min-width:640px)"
                  srcSet={recipe.image?.medium?.replace("./", "/")}
                />
                <source
                  media="(max-width:639px)"
                  srcSet={recipe.image?.small?.replace("./", "/")}
                />
                <img
                  src={
                    recipe.image?.small?.replace("./", "/") ||
                    recipe.image?.medium?.replace("./", "/") ||
                    recipe.image?.large?.replace("./", "/")
                  }
                  alt={recipe.title}
                  className="w-full object-cover p-2 rounded-2xl"
                />
              </picture>

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {recipe.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {recipe.overview}
                </p>

                <div className="flex flex-wrap gap-6 text-sm text-gray-700 mb-5">
                  <span className="flex items-center gap-1">
                    <img src="/images/icon-servings.svg" alt="" />
                    Servings: {recipe.servings}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src="/images/icon-prep-time.svg" alt="" />
                    Prep: {recipe.prepMinutes} mins
                  </span>
                  <span className="flex items-center gap-1">
                    <img src="/images/icon-cook-time.svg" alt="" />
                    Cook: {recipe.cookMinutes} mins
                  </span>
                </div>

                <NavLink
                  to={`/more/${recipe.id}`}
                  className="mt-auto w-full bg-neutral-900 text-white py-2.5 rounded-full font-medium transition-colors text-center"
                >
                  View Recipe
                </NavLink>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Recipes;
