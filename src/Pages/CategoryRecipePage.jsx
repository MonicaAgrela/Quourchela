import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GiMeat } from "react-icons/gi";
import { FaSpaghettiMonsterFlying } from "react-icons/fa6";
import { FaFish, FaPizzaSlice, FaCarrot } from "react-icons/fa";



function CategoryRecipePage() {
  const [recipes, setRecipes] = useState([]);
  const [type, setType] = useState("pasta"); 
  // Default to pasta recipes

  useEffect(() => {
    if (type) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/recipes?type=${type}`)
        .then((response) => {
          setRecipes(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [type]);

  return (
    <div
      className="flex flex-col items-center space-y-4 mt-30"
      style={{ backgroundColor: "#FAFAF9", paddingTop: "100px" }}
    >
      <h1 className="text-4xl mb-6 text-primary font-bold">
        Explore flavors & Choose your delight
      </h1>
      <div className="flex space-x-4">
        {/* Category buttons */}
        {[
          {
            type: "pasta",
            icon: (
              <FaSpaghettiMonsterFlying className="text-8xl text-purple-500" />
            ),
            color: "#FAFAF9",
          },
          {
            type: "meat",
            icon: <GiMeat className="text-8xl text-red-600" />,
            color: "#FAFAF9",
          },
          {
            type: "fish",
            icon: <FaFish className="text-8xl text-blue-500" />,
            color: "#FAFAF9",
          },
          {
            type: "vegetables",
            icon: <FaCarrot className="text-8xl text-green-600" />,
            color: "#FAFAF9",
          },
          {
            type: "pizza",
            icon: <FaPizzaSlice className="text-8xl text-yellow-500" />,
            color: "#FAFAF9",
          },
        ].map((category) => (
          <button
            key={category.type}
            onClick={() => setType(category.type)}
            className={`flex flex-col items-center focus:outline-none text-xl font-semibold ${
              type === category.type ? `text-${category.type}` : "text-gray-500"
            }`}
            style={{ backgroundColor: category.color }}
          >
            {category.icon}
            <span>{category.type}</span>
          </button>
        ))}
      </div>

      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Display recipes */}
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-lg font-semibold">{recipe.name}</h2>
              <img
                src={recipe.image}
                alt={recipe.name}
                className="mt-2 mb-4 rounded-md object-cover w-full h-48"
              />
              <Link
                to={`/recipes/${recipe.id}`}
                className="text-blue-500 hover:underline"
              >
                See Recipe
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">
          No recipes found for the selected category.
        </p>
      )}
    </div>
  );
}

export default CategoryRecipePage;