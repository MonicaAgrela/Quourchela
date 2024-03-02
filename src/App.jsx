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
import AboutUsPage from "./Pages/AboutUsPage";

import BlogPageOne from "./components/blogpages/BlogPageOne";
import BlogPageTwo from "./components/blogpages/BlogPageTwo";
import BlogPageThree from "./components/blogpages/BlogPageThree";

import BlogPostPage from "./components/Blogpost/BlogPostPage";


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
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/blog-1" element={<BlogPageOne />} />
        <Route path="/blog-2" element={<BlogPageTwo />} />
        <Route path="/blog-3" element={<BlogPageThree />} />
        
        <Route path="/blogs" element={<BlogPostPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
