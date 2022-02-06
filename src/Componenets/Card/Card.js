import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import fast_fashion_info from "./fast_fashion_info.jpg";
import food_waste_info from "./food_waste_info.jpg";
import blood_donation_info from "./blood_donation_info.jpg";

function Card() {
  return (
    <>
      <h1 className="card-heading">Learn how you can help</h1>
      <div className="slide-container">
        <div className="card-container one">
          <div className="product-details">
            <h1>Fast Fashion</h1>
            <p className="information">Fast Fashion describes cheap and trendy clothing. Much of it is based on current trends and celebrities, as well as pop culture. Because of this, fast fashion is produced, pushed out into stores, and discarded quickly. </p>
            <div className="control">
              <button className="form-btn form-btn-1" href="#rm-fast-fashion">
                <span className="buy">Read More</span>
              </button>
 
              <button class="form-btn form-btn-2">
                <Link to="/contribute/clothes">
                  <span class="buy">Donate</span>
                </Link>
              </button>
            </div>
          </div>
          <div className="product-image">
            <img src={fast_fashion_info} alt=""></img>
            <div className="info">
              <h2> Statistics</h2>
              <ul>
                <li>
                  <strong>92 million tons of clothes-related waste each year</strong>
                </li>
                <li>
                  <strong>80% of all clothing is landfilled or incinerated.</strong>
                </li>
                <li>
                  <strong>The fashion industry is responsible for an estimated 
                  8-10% of global greenhouse gas emissions.</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="two" id="rm-fast-fashion">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>

      <div className="card-container">
        <div className="product-details">
          <h1>Food Waste</h1>
          <p className="information">Food waste is the loss of edible food due to incidents such as spoilage, waste, or exposure to chemicals. This makes these food items unsafe to eat, even though they could been redistributed for nourishment. </p>
          <div className="control">
            <button className="form-btn form-btn-1">
              <span className="buy">Read More</span>
            </button>

            <button class="form-btn form-btn-2">
              <Link to="/contribute/food">
                <span class="buy">Donate</span>
              </Link>

            </button>
          </div>
        </div>
        <div className="product-image">
          <img src={food_waste_info} alt=""></img>
          <div className="info">
            <h2> Statistics</h2>
            <ul>
              <li>
                <strong>In US, food waste is at 30-40 percent of the food supply</strong>
              </li>
              <li>
                <strong>An estimated of 1.3 billion tonnes of food is wasted each year</strong>
              </li>
              <li>
                <strong>An average US household wastes 31.9% of the food that its members obtain</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="product-details">
          <h1>Blood Donation</h1>
          <p className="information">Blood donation is a voluntary procedure performed by a qualified 
          medical professional on an individual to extract blood and its contents. This blood is packaged and used for vital procedures such as transfusions or the development of medication. </p>
          <div className="control">
            <button className="form-btn form-btn-1">
              <span className="buy">Read More</span>
            </button>

            <button class="form-btn form-btn-2">
              <Link to="/contribute/blood">
                <span class="buy">Donate</span>
              </Link>

            </button>
          </div>
        </div>
        <div className="product-image">
          <img src={blood_donation_info} alt=""></img>
          <div className="info">
            <h2> Statistics</h2>
            <ul>
              <li>
                <strong>Every 2 seconds someone in the U.S. needs blood or platelets</strong>
              </li>
              <li>
                <strong>One donation can help save more than one life.</strong>
              </li>
              <li>
                <strong>A single car accident victim can require as many as 100 units of blood.</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
