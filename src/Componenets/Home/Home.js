import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-img">
        <h2 className="home-img_heading">CHANGE LIVES. SAVE LIVES.</h2>
        <h3 className="home-img_subtitle_line">
          Help us make a difference And reduce, resue and recycle stuff.
        </h3>
        <h4 className="home-img_quote">
          Nature Provides A Free Lunch But Only If We <br /> Control Our
          Appetites
        </h4>
        <h4 className="home-img_author">-William Ruckelshaus</h4>
      </div>
      <div className="home-btns">
        <button className="home-btn">How can you help</button>
        <button className="home-btn home-btn-1">Ways to contribute</button>
      </div>
    </div>
  );
}

export default Home;
