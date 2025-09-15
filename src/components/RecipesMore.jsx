import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RecipesMore() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setPending(true);
    fetch("https://68c6a361442c663bd0278d4c.mockapi.io/recipes")
      .then((res) => res.json())
      .then((recipes) => {
        setData(recipes);
        setPending(false);
      })
      .catch(() => setPending(false));
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      {pending && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      )}

      {/* Main Recipe */}
      <div>
        {data
          ?.filter((recipe) => recipe.id === id)
          .map((recipe) => (
            <motion.div
              key={recipe.id}
              className="flex flex-col lg:flex-row gap-10 bg-white shadow-lg rounded-2xl overflow-hidden p-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
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
                  src={recipe.image?.large?.replace("./", "/")}
                  alt={recipe.title}
                  className="w-full object-cover p-2 rounded-2xl"
                />
              </picture>

              {/* Content */}
              <motion.div
                className="flex flex-col gap-6 lg:w-1/2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-800">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.overview}</p>

                {/* Infos */}
                <div className="flex flex-wrap gap-6 text-sm text-gray-700">
                  <span className="flex items-center gap-2">
                    <img
                      src="/images/icon-servings.svg"
                      width={19}
                      height={20}
                      alt="servings"
                    />
                    Serving: {recipe.servings}
                  </span>
                  <span className="flex items-center gap-2">
                    <img
                      src="/images/icon-prep-time.svg"
                      width={19}
                      height={20}
                      alt="prep"
                    />
                    Prep: {recipe.prepMinutes} min
                  </span>
                  <span className="flex items-center gap-2">
                    <img
                      src="/images/icon-cook-time.svg"
                      width={19}
                      height={20}
                      alt="cook"
                    />
                    Cook: {recipe.cookMinutes} min
                  </span>
                </div>

                {/* Ingredients */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Ingredients :
                  </h3>
                  <ul className="space-y-2">
                    {recipe.ingredients?.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <img
                          src="/images/icon-bullet-point.svg"
                          alt="icon"
                          className="mt-1"
                        />
                        <p className="text-gray-600">{item}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Instructions */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Instructions :
                  </h3>
                  <ol className="space-y-2 list-decimal list-inside text-gray-600">
                    {recipe.instructions?.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
