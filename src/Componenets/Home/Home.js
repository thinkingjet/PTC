import React from "react";
import "./Home.css";
import Article from "../Article/Article";
import Card from "../Card/Card";
import Donate from "../Donate/Donate";
import Solution from "../Solution/Solution";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
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
      <Card />
      <Article />
      <Donate />
      <Solution />
      <Footer />
    </>
  );
}

export default Home;
