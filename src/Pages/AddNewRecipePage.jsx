import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function AddNewRecipePage() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const { recipesId } = useParams();

  function handleSubmit(e) {
    e.preventDefault();

    const newRecipe = {
      type: type,
      name: name,
      cuisine: cuisine,
      image: image,
      ingredients: ingredients,
      instructions: instructions,
      description: description,
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/recipes`, newRecipe)
      .then(() => {
        navigate("/recipes");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="type" className="text-sm font-semibold text-gray-600">
            Type
          </label>
          <input
            id="type"
            name="type"
            type="text"
            onChange={(e) => {
              setType(e.target.value);
            }}
            className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold text-gray-600">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="cuisine"
            className="text-sm font-semibold text-gray-600"
          >
            Cuisine
          </label>
          <input
            id="cuisine"
            name="cuisine"
            type="text"
            onChange={(e) => {
              setCuisine(e.target.value);
            }}
            className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="image"
            className="text-sm font-semibold text-gray-600"
          >
            Image
          </label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={(e) => {
              setImage(e.target.value);
            }}
            className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="ingredients"
            className="text-sm font-semibold text-gray-600"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            type="text"
            onChange={(e) => {
              setIngredients(e.target.value);
            }}
            className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-indigo-500"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="instructions"
            className="text-sm font-semibold text-gray-600"
          >
            Instructions
          </label>
          <textarea
            id="instructions"
            name="instructions"
            type="text"
            onChange={(e) => {
              setInstructions(e.target.value);
            }}
            className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-indigo-500"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-sm font-semibold text-gray-600"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primaryDark transition duration-300"
        >
          Add New Recipe
        </button>
      </form>
      <Link
        to={`/recipes/${recipesId}/edit`}
        className="block text-sm text-gray-600 mt-4"
      >
        Edit the Recipe
      </Link>
    </div>
  );
}

export default AddNewRecipePage;
