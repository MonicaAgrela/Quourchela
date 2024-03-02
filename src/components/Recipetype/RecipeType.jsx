import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RecipeType() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/recipes?name_like=${query}`)
        .then((response) => {
          setRecipes(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setRecipes([]);
    }
  }, [query]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold text-gray-800">Recipes</h1>
          <div className="relative flex items-center space-x-4">
            <input
              placeholder="Search for Recipes"
              className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none"
              id="search-bar"
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            {recipes.length > 0 && (
              <div className="absolute top-10 right-0 bg-white p-2 rounded shadow-md">
                {recipes.map((oneRecipe) => (
                  <Link key={oneRecipe.id} to={`/recipes/${oneRecipe.id}`}>
                    <div className="flex items-center space-x-2">
                      {/* Add icons or other creative elements here */}
                      <span className="text-gray-600">{oneRecipe.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Rest of your component content */}
      </div>
    </div>
  );
}

export default RecipeType;
