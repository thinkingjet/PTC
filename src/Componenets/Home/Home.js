import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-img">
        <h2 className="home-img_heading">
          Change Lives
          <br /> Save Lives
        </h2>
        <hr className="underline"></hr>
      </div>
      <div className="home-btns">
        <button className="home-btn">How can you help</button>
        <button className="home-btn home-btn-1">Ways to contribute</button>
      </div>
    </div>
  );
}

export default Home;
