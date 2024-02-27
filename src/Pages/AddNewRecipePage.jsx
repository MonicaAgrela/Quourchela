import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

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
      .post(`http://localhost:5005/recipes`, newRecipe)
      .then(() => {
        navigate("/recipes");
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
          ></textarea>
        </label>

        <button type="submit">Add New Recipe</button>
      </form>
      <Link to={`/recipes/${recipesId}/edit`}>Edit the Recipe</Link>
    </div>
  );
}

export default AddNewRecipePage;
