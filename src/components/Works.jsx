import React from "react";
import works from "../data/works";
import Card from "./Card";

function Works() {
  return (
    <div className="py-12" id="works">
      <h1 className="heading py-3">Recent Works</h1>
      <div className="my-grid">
        {works.map((el, i) => (
          <Card
            title={el.title}
            imgUrl={el.imgUrl}
            tech={el.tech}
            workUrl={el.workUrl}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
