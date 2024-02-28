import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllRecipesPage() {
  const [recipes, setRecipes] = useState();
  const [type] = useState("");



  useEffect(() => {
    if (type) {
      axios
        .get(`http://localhost:5005/recipes?type=${type}`)
        .then((response) => {
          setRecipes(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`http://localhost:5005/recipes`)
        .then((response) => {
          setRecipes(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [type]);

  return (
    <div>
      {recipes && (
        <>
          {recipes.map((oneRecipe) => {
            return (
              <Link key={oneRecipe.id} to={`/recipes/${oneRecipe.id}`}>
                <img src={oneRecipe.image} />
                {oneRecipe.name}
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
}

export default AllRecipesPage;
