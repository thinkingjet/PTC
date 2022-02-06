import React from "react";
import "./Card.css";
import fast_fashion_info from "./fast_fashion_info.jpg";
import food_waste_info from "./food_waste_info.jpg";
import blood_donation_info from "./blood_donation_info.jpg";

function Card() {
  return (
    <>
      <h1 className="card-heading">Learn how you can help</h1>
      <div class="slide-container">
        <div class="card-container one">
          <div class="product-details">
            <h1>Fast Fashion</h1>
            <p class="information">information</p>
            <div class="control">
              <button class="form-btn form-btn-1" href="#rm-fast-fashion">
                <span class="buy">Read More</span>
              </button>
              <button class="form-btn form-btn-2">
                <span class="buy">Donate</span>
              </button>
            </div>
          </div>
          <div class="product-image">
            <img src={fast_fashion_info} alt=""></img>
            <div class="info">
              <h2> Description</h2>
              <ul>
                <li>
                  <strong>Height : </strong>5 Ft{" "}
                </li>
                <li>
                  <strong>Shade : </strong>Olive green
                </li>
                <li>
                  <strong>Decoration: </strong>balls and bells
                </li>
                <li>
                  <strong>Material: </strong>Eco-Friendly
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="two" id="rm-fast-fashion">
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

      <div class="card-container">
        <div class="product-details">
          <h1>Food Waste</h1>
          <p class="information">information</p>
          <div class="control">
            <button class="form-btn form-btn-1">
              <span class="buy">Read More</span>
            </button>
            <button class="form-btn form-btn-2">
              <span class="buy">Donate</span>
            </button>
          </div>
        </div>
        <div class="product-image">
          <img src={food_waste_info} alt=""></img>
          <div class="info">
            <h2> Description</h2>
            <ul>
              <li>
                <strong>Height : </strong>5 Ft{" "}
              </li>
              <li>
                <strong>Shade : </strong>Olive green
              </li>
              <li>
                <strong>Decoration: </strong>balls and bells
              </li>
              <li>
                <strong>Material: </strong>Eco-Friendly
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card-container">
        <div class="product-details">
          <h1>Blood Donation</h1>
          <p class="information">information</p>
          <div class="control">
            <button class="form-btn form-btn-1">
              <span class="buy">Read More</span>
            </button>
            <button class="form-btn form-btn-2">
              <span class="buy">Donate</span>
            </button>
          </div>
        </div>
        <div class="product-image">
          <img src={blood_donation_info} alt=""></img>
          <div class="info">
            <h2> Description</h2>
            <ul>
              <li>
                <strong>Height : </strong>5 Ft{" "}
              </li>
              <li>
                <strong>Shade : </strong>Olive green
              </li>
              <li>
                <strong>Decoration: </strong>balls and bells
              </li>
              <li>
                <strong>Material: </strong>Eco-Friendly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
