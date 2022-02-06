import React from "react";
import "./Home.css";
import Article from "../Article/Article";
//import Card from "../Card/Card";
import Info from "../Info/Info";
import Donate from "../Donate/Donate";
import Solution from "../Solution/Solution";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-img">
          <h2 className="home-img_heading heading">
            Change Lives
            <br /> Save Lives
          </h2>
          <hr className="underline"></hr>
          <p>Help us change and save lives through sustainable recycling</p>
        </div>
        <div className="home-btns">
          <button className="home-btn">About Us</button>
          <button className="home-btn home-btn-1">How to contribute</button>
        </div>
      </div>
      <Info />
      <Donate />
      <Article />
      <Solution />
      <Footer />
    </>
  );
}

export default Home;
