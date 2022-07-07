import React from "react";

function HeroSection() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="text-center">
        <h1 className="heading">Hi, this is Aditya 🤖</h1>
        <p className="paragraph text-md md:text-lg">
          A human who comes from Banten. I am a junior front end web developer.
          Likes to learn things related to technology. I've learn programming
          since I graduated school because I don't know what to do, and now it's
          continuing.
        </p>
        <a href="#works" className="btn-indigo text-md">
          See Works
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
