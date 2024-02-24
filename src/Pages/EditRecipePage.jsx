import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
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
      .put(`http://localhost:5005/recipes/${recipesId}`, editedRecipe)
      .then(() => {
        navigate(`/recipes`);
      })
      .catch(() => {});
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5005/recipes/${recipesId}`)
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
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label>
          Type
          <input
            name="type"
            type="text"
            onChange={(e) => {
              setType(e.target.value);
            }}
            value={type}
          />
        </label>

        <label>
          Name
          <input
            name="name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>

        <label>
          Cuisinie
          <input
            name="cuisine"
            type="text"
            onChange={(e) => {
              setCuisine(e.target.value);
            }}
            value={cuisine}
          />
        </label>

        <label>
          Image
          <input
            name="image"
            type="text"
            onChange={(e) => {
              setImage(e.target.value);
            }}
            value={image}
          />
        </label>

        <label>
          Ingredients
          <textarea
            name="ingredients"
            type="text"
            onChange={(e) => {
              setIngredients(e.target.value);
            }}
            value={ingredients}
          ></textarea>
        </label>

        <label>
          Instructions
          <textarea
            name="instructions"
            type="text"
            onChange={(e) => {
              setInstructions(e.target.value);
            }}
            value={instructions}
          ></textarea>
        </label>

        <label>
          Description
          <textarea
            name="description"
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          ></textarea>
        </label>

        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default EditRecipePage;
