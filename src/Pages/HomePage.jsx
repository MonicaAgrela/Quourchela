import "aos/dist/aos.css";
import React from "react";
import Hero from "../components/Hero/Hero";
import BlogPostPage from "../components/Blogpost/BlogPostPage";
import RecipeType from "../components/Recipetype/RecipeType";

function HomePage() {


  return (
    <>
      <Hero />
      <RecipeType />
      <BlogPostPage />
    </>
  );
}

export default HomePage;
