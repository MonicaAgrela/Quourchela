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
        .get(`http://localhost:5005/recipes/${recipesId}`)
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
      .delete(`http://localhost:5005/recipes/${recipesId}`)
      .then(() => {
        navigate("/recipes");
      })
      .catch(() => {});
  }

  if (!recipeDetails) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div>
        <img src={recipeDetails.image} alt="" />
      </div>
      <div>
        <h1>{recipeDetails.name}</h1>
        <h2>{recipeDetails.cuisine}</h2>
        <p>{recipeDetails.ingredients}</p>
        <p>{recipeDetails.instructions}</p>
        <p>{recipeDetails.description}</p>
        <Link to={`/recipes/${recipesId}/edit`}>Edit the Recipe</Link>
        <button onClick={deleteProject}>Delete</button>
      </div>
    </div>
  );
}

export default DetailsRecipePage;
