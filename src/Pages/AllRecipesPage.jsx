import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllRecipesPage() {
  const [recipes, setRecipes] = useState();
  const [type, setType] = useState("");

  // useEffect(() => {
    
  // }, []);
  //console.log(recipies);

  useEffect(() => {
    if (type) {
      axios.get(`http://localhost:5005/recipies?type=${type}`)
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      axios
      .get(`http://localhost:5005/recipies`)
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }, [type])

  return (
    <div>
      {recipes && (
        <>
          {recipes.map((oneRecipe) => {
            return (
              <Link key={oneRecipe.id} to={`/recipes/${oneRecipe.id}`}>
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
