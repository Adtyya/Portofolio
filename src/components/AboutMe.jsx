import React from "react";
import Me from "../media/me.jpg";

function AboutMe() {
  return (
    <div className="py-12">
      <h1 className="heading py-3">About Me</h1>
      <div className="is-flex-row md:space-x-3">
        <p className="w-full flex items-center md:w-3/4 paragraph-lit text-md md:text-lg text-start">
          Vocational high school graduated. Majoring in computer and network
          engineering. I like to learn javascript even though I often get
          headaches. Doesn't like learning PHP, but will most likely learn due
          to market demand.
        </p>
        <div className="flex justify-center w-full mb-5 md:mb-0 md:w-1/4">
          <img
            src={Me}
            alt="author"
            className="w-[200px] h-[200px] object-cover rounded-full outline outline-4 outline-slate-300 dark:outline-slate-800"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
