import React, { useEffect, useState } from 'react';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://68c6a361442c663bd0278d4c.mockapi.io/recipes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h2>{recipe.title}</h2>
          <img
            src={recipe.image?.large.replace('./', '/')}
            alt={recipe.title}
            width="300"
          />
          <p>{recipe.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
