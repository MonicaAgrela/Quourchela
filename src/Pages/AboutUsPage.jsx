import React from "react";

function AboutUsPage() {
  return (
    <div className="mx-auto max-w-lg p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to Quourchela
      </h1>

      <img src="/mainLogo.png" alt="Quourchela Logo" className="mx-auto mb-8" />

      <div className="text-lg">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>
          Quourchela is a food app where the name is born from the fusion of the
          two last names of the founders: "Quourchi" and "Agrela". Our purpose
          is to provide a platform where users can discover various recipes
          categorized by type rather than by country.
        </p>
        <p>
          We offer our users the ability to add, edit, and delete recipes as
          they desire. Additionally, we maintain a Blog section where users can
          see food-related curiosities.
        </p>
      </div>
    </div>
  );
}

export default AboutUsPage;
