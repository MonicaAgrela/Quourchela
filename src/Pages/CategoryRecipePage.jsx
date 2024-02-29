import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CategoryRecipePage() {
  const [recipes, setRecipes] = useState();
  const [type, setType] = useState("");

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
    }
  }, [type]);

  return (
    <div className="ButtonDiv">
      <div>
        <button
          onClick={() => {
            setType("meat");
          }}
        >
          Meat
        </button>

        <button
          onClick={() => {
            setType("fish");
          }}
        >
          Fish
        </button>

        <button
          onClick={() => {
            setType("vegetables");
          }}
        >
          Vegetables
        </button>

        <button
          onClick={() => {
            setType("pasta");
          }}
        >
          Pasta
        </button>

        <button
          onClick={() => {
            setType("pizza");
          }}
        >
          Pizza
        </button>
      </div>
      {recipes &&
        recipes.map((recipes) => (
          <div key={recipes.id}>
            {recipes.name}
            <img src={recipes.image} alt="" />

            <Link to={`/recipes/${recipes.id}`}>
              <button>See Recipe</button>
            </Link>
          </div>
        ))}
    </div>
  );
}
export default CategoryRecipePage;
