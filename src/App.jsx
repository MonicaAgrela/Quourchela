import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import AllRecipesPage from "./Pages/AllRecipesPage";
import CategoryRecipePage from "./Pages/CategoryRecipePage";
import DetailsRecipePage from "./Pages/DetailsRecipePage.jsx";
import AddNewRecipePage from "./Pages/AddNewRecipePage";
import EditRecipePage from "./Pages/EditRecipePage.jsx";
import AboutUsPage from "./Pages/AboutUsPage.jsx";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryRecipePage />} />
        <Route path="/recipes" element={<AllRecipesPage />} />
        <Route path="/recipes/:recipesId" element={<DetailsRecipePage />} />
        <Route path="/new-recipe" element={<AddNewRecipePage />} />
        <Route path="/recipes/:recipesId/edit" element={<EditRecipePage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
