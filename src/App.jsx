import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RegisterForm from "./components/Registerform/RegisterForm";
import BlogPostPage from "./components/Blogpost/BlogPostPage";
import Hero from "./components/Hero/Hero";
import Popup from "./components/Popup/Popup";
import RecipeType from "./components/Recipetype/RecipeType";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <Hero />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      <RecipeType />
      <BlogPostPage />
      <Footer />
      <Routes>
        <Route path="/signup" element={<RegisterForm></RegisterForm>}></Route>
      </Routes>
    </div>
  );
}

export default App;
