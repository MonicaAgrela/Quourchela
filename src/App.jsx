import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import AllRecipesPage from "./Pages/AllRecipesPage";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <AllRecipesPage></AllRecipesPage>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
