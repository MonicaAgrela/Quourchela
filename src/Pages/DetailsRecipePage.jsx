import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function DetailsRecipePage() {
  const [recipeDetails, setRecipeDetails] = useState();
  const { recipesId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (recipesId) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/recipes/${recipesId}`)
        .then((oneRecipeDetails) => {
          setRecipeDetails(oneRecipeDetails.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [recipesId]);

  function deleteProject() {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/recipes/${recipesId}`)
      .then(() => {
        navigate("/recipes");
      })
      .catch(() => {});
  }

  if (!recipeDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={recipeDetails.image}
            alt={recipeDetails.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-2">{recipeDetails.name}</h1>
          <h2 className="text-xl font-semibold mb-4">
            {recipeDetails.cuisine}
          </h2>
          <h3 className="text-xl font-semibold  mb-4 text-primary">
            {recipeDetails.type.toUpperCase()}
          </h3>
          <h6 className="text-xl font-semibold  mb-4 text-black">
            Ingredients:
          </h6>
          <ol>
            {recipeDetails.ingredients.map((oneIngredient) => {
              return <li key={oneIngredient}>{oneIngredient}</li>;
            })}
          </ol>
          <h6 className="text-xl font-semibold  mb-4 text-black">
            Instructions:
          </h6>
          <p className="mb-4">{recipeDetails.instructions}</p>
          <h6 className="text-xl font-semibold  mb-4 text-black">
            Description:
          </h6>
          <p className="mb-4">{recipeDetails.description}</p>
          <h6 className="text-xl font-semibold  mb-4 text-black">
            Recommended Restaurants:
          </h6>
          <ol>
            {recipeDetails.restaurants.map((oneRestaurant) => {
              return <li key={oneRestaurant}>{oneRestaurant}</li>;
            })}
          </ol>
          <div className="flex items-center space-x-4">
            <Link
              to={`/recipes/${recipesId}/edit`}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primaryDark transition duration-300"
            >
              Edit the Recipe
            </Link>
            <button
              onClick={deleteProject}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsRecipePage;
