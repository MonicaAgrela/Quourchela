import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import AllRecipesPage from "./Pages/AllRecipesPage";
import CategoryRecipePage from "./Pages/CategoryRecipePage"
import DetailsRecipePage from "./Pages/DetailsRecipePage"
import AddNewRecipePage from "./Pages/AddNewRecipePage"

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<AllRecipesPage />} />
      </Routes>
    </div>
  );
}

export default App;
