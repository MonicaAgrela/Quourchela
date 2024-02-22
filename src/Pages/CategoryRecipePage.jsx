import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CategoryRecipePage() {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/recipes`)
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {recipes && (
        <>
          {recipes.map((oneRecipe) => {
            return (
              <div className="containerCategory">
                <div className="type">
                  <Link>Fish{oneRecipe.name}</Link>
                </div>
                <div className="type">
                  <Link>Meat</Link>
                </div>
                <div className="type">
                  <Link>Pasta</Link>
                </div>
                <div className="type">
                  <Link>Vegetables</Link>
                </div>
                <div className="type">
                  <Link>Pizza</Link>
                </div>
              </div>
            )
          })}
        </>
      )}
    </div>
  );
}

export default CategoryRecipePage;
