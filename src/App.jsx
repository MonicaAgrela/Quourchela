import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RegisterForm from "./components/Registerform/RegisterForm";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "./components/Popup/Popup";
import AddNewRecipePage from "./Pages/AddNewRecipePage";
import { useState, useEffect } from "react";
import AllRecipesPage from "./Pages/AllRecipesPage";
import CategoryRecipePage from "./Pages/CategoryRecipePage";
import DetailsRecipePage from "./Pages/DetailsRecipePage";
import EditRecipePage from "./Pages/EditRecipePage";
import HomePage from "./Pages/HomePage";


function App() {
   const [showPopup, setShowPopup] = useState(false);
   const HandlePopup = () => {
     setShowPopup(true);
   };

   useEffect(() => {
     AOS.init({
       offset: 100,
       duration: 800,
       easing: "ease-in-sine",
       delay: 100,
     });
     AOS.refresh();
   }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar HandlePopup={HandlePopup} />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      <Routes>
        <Route path="/signup" element={<RegisterForm></RegisterForm>}></Route>

        <Route path="/" element={<HomePage></HomePage>}></Route>
        {/* new pgs below */}
        <Route path="/new-recipe" element={<AddNewRecipePage />} />

        <Route path="/recipes" element={<AllRecipesPage />} />

        <Route path="/categories" element={<CategoryRecipePage />} />

        <Route path="/recipes/:recipesId" element={<DetailsRecipePage />} />

        <Route path="/recipes/:recipesId/edit" element={<EditRecipePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
