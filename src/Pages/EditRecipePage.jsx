import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditRecipePage() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [description, setDescription] = useState("");

  const { recipesId } = useParams();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    let editedRecipe = {
      type: type,
      name: name,
      cuisine: cuisine,
      image: image,
      ingredients: ingredients,
      instructions: instructions,
      description: description,
    };

    axios
      .put(`${import.meta.env.VITE_API_URL}/${recipesId}`, editedRecipe)
      .then(() => {
        navigate(`/recipes`);
      })
      .catch(() => {});
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/recipes/${recipesId}`)
      .then((recipeFromApi) => {
        setType(recipeFromApi.data.type);
        setName(recipeFromApi.data.name);
        setCuisine(recipeFromApi.data.cuisine);
        setImage(recipeFromApi.data.image);
        setIngredients(recipeFromApi.data.ingredients);
        setInstructions(recipeFromApi.data.instructions);
        setDescription(recipeFromApi.data.description);
      });
  }, [recipesId]);

  return (
    <div className="mx-auto max-w-lg mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          onChange={(e) => {
            setType(e.target.value);
          }}
          defaultSelected={type}
        >
          <option value="pasta">Pasta</option>
          <option value="fish">Fish</option>
          <option value="meat">Meat</option>
          <option value="pizza">Pizza</option>
          <option value="vegetables">Vegetables</option>
        </select>

        {/* <label className="block">
          Type
          <input
            name="type"
            type="text"
            onChange={(e) => setType(e.target.value)}
            value={type}
            className="form-input mt-1 block w-full border border-gray-300 rounded-md"
          />
        </label> */}

        <label className="block">
          Name
          <input
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="form-input mt-1 block w-full border border-gray-300 rounded-md"
          />
        </label>

        <label className="block">
          Cuisine
          <input
            name="cuisine"
            type="text"
            onChange={(e) => setCuisine(e.target.value)}
            value={cuisine}
            className="form-input mt-1 block w-full border border-gray-300 rounded-md"
          />
        </label>

        <label className="block">
          Image
          <input
            name="image"
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            className="form-input mt-1 block w-full border border-gray-300 rounded-md"
          />
        </label>

        <label className="block">
          Ingredients
          <textarea
            name="ingredients"
            onChange={(e) => setIngredients(e.target.value)}
            value={ingredients}
            className="form-textarea mt-1 block w-full border border-gray-300 rounded-md"
          ></textarea>
        </label>

        <label className="block">
          Instructions
          <textarea
            name="instructions"
            onChange={(e) => setInstructions(e.target.value)}
            value={instructions}
            className="form-textarea mt-1 block w-full border border-gray-300 rounded-md"
          ></textarea>
        </label>

        <label className="block">
          Description
          <textarea
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="form-textarea mt-1 block w-full border border-gray-300 rounded-md"
          ></textarea>
        </label>

        <button
          type="submit"
          className="btn bg-primary text-white py-2 px-4 rounded-md"
        >
          Edit
        </button>
      </form>
    </div>
  );
}

export default EditRecipePage;
