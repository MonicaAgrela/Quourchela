// import { Link, useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";

// function CategoryRecipePage() {
//   const [recipe, setRecipe] = useState("");

//   useEffect(() => {
//     axios.get(`http://localhost:5005/recipes`).then((recipeApi) => {
//       setRecipe(recipeApi.data);
//     });
//     .catch((err)=>{
//      console.log(err)
//     })
//   }, []);

//   return (
//     <div>
//         {recipes &&(
//             <>
//                 {recipes.map((oneRecipe)=>{
//                     return (
//      <div className="containerCategory">
//        <div className="type">
//          <Link>Fish{oneRecipe.name}</Link>
//        </div>
//        <div className="type">
//          <Link>Meat</Link>
//        </div>
//        <div className="type">
//          <Link>Pasta</Link>
//        </div>
//        <div className="type">
//          <Link>Vegetables</Link>
//        </div>
//        <div className="type">
//          <Link>Pizza</Link>
//        </div>
//      </div>
//    );
//                 })}
//             </>
//         )
//         }
//     </div>
// )
  
// }

// export default CategoryRecipePage;
