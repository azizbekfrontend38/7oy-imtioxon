import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [maxPrep, setMaxPrep] = useState("");
  const [maxCook, setMaxCook] = useState("");

  useEffect(() => {
    fetch("https://68c6a361442c663bd0278d4c.mockapi.io/recipes")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Fetch error:", error))
      .finally(() => setLoading(false));
  }, []);

  // Filtrlash
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesPrep =
      !maxPrep ||
      (recipe.prepMinutes && recipe.prepMinutes <= parseInt(maxPrep));

    const matchesCook =
      !maxCook ||
      (recipe.cookMinutes && recipe.cookMinutes <= parseInt(maxCook));

    return matchesSearch && matchesPrep && matchesCook;
  });

  const handleClear = () => {
    setSearch("");
    setMaxPrep("");
    setMaxCook("");
  };

  // Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }, // duration uzunroq
    },
    exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
  };

  if (loading) {
    // butun sahifa skeleton holatida
    return (
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12 mt-50 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }} // sahifa animatsiyasi uzun
      >
        {/* Title skeleton */}
        <div className="text-center mb-12 max-w-md mx-auto space-y-3">
          <div className="h-8 bg-gray-200 rounded w-2/3 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-full mx-auto"></div>
        </div>

        {/* Filter skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="h-10 bg-gray-200 rounded w-32"></div>
            <div className="h-10 bg-gray-200 rounded w-32"></div>
            <div className="h-10 bg-gray-200 rounded w-20"></div>
          </div>
          <div className="h-10 bg-gray-200 rounded w-full sm:w-80"></div>
        </div>

        {/* Cards skeleton */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col animate-pulse"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }} // kartalar animatsiyasi uzun
              >
                <div className="h-48 w-full bg-gray-200 rounded-t-2xl"></div>

                <div className="p-6 flex flex-col flex-grow gap-3">
                  <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded"></div>

                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    <div className="h-4 w-28 bg-gray-200 rounded"></div>
                  </div>

                  <div className="h-10 w-full mt-auto bg-gray-200 rounded-full"></div>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mt-50">
      {/* real kontent */}
      {/* Title */}
      <motion.div
        className="text-center mb-12 max-w-md mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold text-green-900 mb-4 ">
          Explore our simple, healthy recipes
        </h1>
        <p className="text-base text-gray-600">
          Discover quick, whole-food dishes that fit real-life schedules and
          taste amazing.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
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

        <input
          type="text"
          placeholder="Search by name or ingredient..."
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-green-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </motion.div>

      {/* Recipes List */}
      <motion.div
        className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <motion.div
                key={recipe.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col cursor-pointer"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                }}
                transition={{ duration: 0.6 }}
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
              </motion.div>
            ))
          ) : (
            <motion.p
              key="noRecipes"
              className="text-center text-gray-500 col-span-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No recipes found.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Recipes;
