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
    <div>
      <div className="containerCategory"></div>
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
        {recipes &&
          recipes.map((recipes) => (
            <div key={recipes.id}>
              {recipes.name}

              <Link to={`/recipes/${recipes.id}`}>
                <button>See Recipe</button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
export default CategoryRecipePage;
