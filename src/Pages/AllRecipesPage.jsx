import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllRecipesPage() {
  const [recipes, setRecipes] = useState();
  //const [type] = useState("");
  const [query, setQuery] = useState("");

  /*useEffect(() => {
    if (type) {
      axios
        .get(/recipes?type=${type}`)
        .then((response) => {
          setRecipes(response.data);
        })
        .catch((error) => {`${import.meta.env.VITE_API_URL}
          console.log(error);
        });
    } else {
      axios
        .get(`${import.meta.env.VITE_API_URL}/recipes`)
        .then((response) => {
          setRecipes(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [type]);*/

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/recipes?name_like=${query}`)
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  return (
    <div>
      <div
        style={{
          display: `flex`,
          justifyContent: "center",
          padding: "10px",
          fontSize: "20px",
        }}
      >
        {" "}
        <label>
          Search Recipe{" "}
          <input
            id="search-bar"
            type="text"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
          />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {recipes && (
          <>
            {recipes.map((oneRecipe) => {
              return (
                <Link
                  key={oneRecipe.id}
                  to={`/recipes/${oneRecipe.id}`}
                  className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                >
                  <img
                    src={oneRecipe.image}
                    alt={oneRecipe.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {oneRecipe.name}
                    </h3>
                    <p className="text-gray-700">{oneRecipe.description}</p>
                  </div>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default AllRecipesPage;
