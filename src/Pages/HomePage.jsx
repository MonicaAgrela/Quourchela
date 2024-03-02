import "aos/dist/aos.css";
import React from "react";
import Hero from "../components/Hero/Hero";
import BlogPostPage from "../components/Blogpost/BlogPostPage";
import CategoryRecipePage from "./CategoryRecipePage";

function HomePage() {


  return (
    <>
      <Hero />
      <CategoryRecipePage />
      <BlogPostPage />
    </>
  );
}

export default HomePage;
