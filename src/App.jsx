import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import CategoryRecipePage from "./Pages/CategoryRecipePage"
import axios from "axios";

function App() {
  return (
    <div>
      {/* <HomePage></HomePage> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryRecipePage />} />
      </Routes>
    </div>
  );
}

export default App;
