import React from "react";
import { GiMeat } from "react-icons/gi";
import { FaSpaghettiMonsterFlying } from "react-icons/fa6";
import { FaFish, FaPizzaSlice, FaCarrot } from "react-icons/fa";


function RecipeType() {
  return (
    <div className="bg-gray-100 min-h-5">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold text-gray-800">Recipes</h1>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search for Recipes"
              className="border border-gray-300 rounded px-3 py-2 w-64"
            />
            {/* <select
              name="sort"
              id="sort"
              className="border border-gray-300 rounded px-3 py-2"
            >
              <option value="newest">Sort by: Newest</option>
              <option value="oldest">Sort by: Oldest</option>
              <option value="popular">Sort by: Popular</option>
            </select> */}
          </div>
        </div>
        <div className="flex">
          <div className="w-1/4 space-y-4">
            <button className="flex items-center space-x-2 bg-white rounded-lg px-4 py-3 w-full shadow">
              <GiMeat className="text-6xl" />
              <span className="text-gray-800 font-medium">Meat</span>
            </button>
            <button className="flex items-center space-x-2 bg-white rounded-lg px-4 py-3 w-full shadow">
              <FaFish className="text-6xl" />
              <span className="text-gray-800 font-medium">Fish</span>
            </button>
            <button className="flex items-center space-x-2 bg-white rounded-lg px-4 py-3 w-full shadow">
              <FaSpaghettiMonsterFlying className="text-6xl" />
              <span className="text-gray-800 font-medium">Pasta</span>
            </button>
            <button className="flex items-center space-x-2 bg-white rounded-lg px-4 py-3 w-full shadow">
              <FaPizzaSlice className="text-6xl" />
              <span className="text-gray-800 font-medium">Pizza</span>
            </button>
            <button className="flex items-center space-x-2 bg-white rounded-lg px-4 py-3 w-full shadow">
              <FaCarrot className="text-6xl"/>
              <span className="text-gray-800 font-medium">Vegetables</span>
            </button>
          </div>
          <div className="w-3/4 ml-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
                <img
                  src="ichiraku-ramen.png"
                  alt="Ichiraku Ramen"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="flex items-center mt-4">
                  <img src="servings.png" alt="Servings" className="w-6 h-6" />
                  <span className="text-white ml-2">3</span>
                </div>
                <div className="flex items-center mt-4">
                  <img
                    src="cook-time.png"
                    alt="Cook Time"
                    className="w-6 h-6"
                  />
                  <span className="text-white ml-2">1h 45 min</span>
                </div>
                <h2 className="text-white text-2xl font-bold mt-4">
                  Ichiraku Ramen
                </h2>
              </div>
              <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
                <img
                  src="egg-ramen.png"
                  alt="Egg Ramen"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="flex items-center mt-4">
                  <img src="servings.png" alt="Servings" className="w-6 h-6" />
                  <span className="text-white ml-2">3</span>
                </div>
                <div className="flex items-center mt-4">
                  <img
                    src="cook-time.png"
                    alt="Cook Time"
                    className="w-6 h-6"
                  />
                  <span className="text-white ml-2">1h 30 min</span>
                </div>
                <h2 className="text-white text-2xl font-bold mt-4">
                  Egg Ramen
                </h2>
              </div>
            </div>
            <button className="bg-white rounded-lg px-4 py-3 mt-8 shadow-lg">
              <span className="text-gray-800 font-medium">Find More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeType;
