import React from "react";
import "./Info.css";
import food_waste_info from "./food_waste_info.jpg";
import fast_fashion_info from "./fast_fashion_info.jpg";

function Info() {
  return (
    <div className="outmost-container container-fluid bg-dark">
      <div className="text-center section-heading-div">
        <h1 style={{ color: "black" }} className="section-heading">
          Problems
        </h1>
      </div>
      <div className="container container-for-cards">
        <div className="row justify-content-md-center">
          <div className="col-4 d-flex">
            <img
              src="https://raw.githubusercontent.com/thinkingjet/PTC/dev/src/Componenets/Info/food_waste_info.jpg"
              alt="hg"
            ></img>
          </div>
          <div className="col-8 d-flex align-item-stretch">
            <div className="card bg-light border-secondary">
              <div className="card-body">
                <h3 className="project-name card-title">Food Waste</h3>
                <br></br>
                <p>Food Waste ...</p>
                <div className="info-btn-div">
                  <button>Read more</button>
                  <button>Donate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-8 d-flex align-item-stretch">
            <div className="card bg-light border-secondary">
              <div className="card-body">
                <h3 className="project-name card-title">Fast Fashion</h3>
                <br></br>
                <p>Fast fashion ...</p>
                <div className="info-btn-div">
                  <button>Read more</button>
                  <button>Donate</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex">
            <img
              alt="hh"
              src="https://raw.githubusercontent.com/thinkingjet/PTC/dev/src/Componenets/Info/fast_fashion_info.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
