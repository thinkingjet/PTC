import React from "react";
import "./Solution.css";

function Solution() {
  return (
    <div className="solution-container">
      <h1>What We Do</h1>
      <div className="solution-card-container container-fluid d-flex justify-content-center">
        <div class="solution-card">
          <figure class="solution-card__thumb">
            <img
              src="https://raw.githubusercontent.com/thinkingjet/PTC/dev/src/Componenets/Solution/blood_donate.jpeg"
              alt="by Kyle Cottrell"
              class="solution-card__image"
            ></img>
            <figcaption class="solution-card__caption">
              <h2 class="solution-card__title">Blood Donation</h2>
              <p class="solution-card__snippet">
                Blood shortage is a global problem. If you are an eligible
                donor, you can donate life-saving blood to patients in need
                through our platform, which matches you with local professionals
                willing to perform this minimally-invasive procedure.
              </p>
              <a
                href="https://www.nhlbi.nih.gov/health-topics/blood-donation"
                class="solution-card__button"
              >
                Donate
              </a>
            </figcaption>
          </figure>
        </div>

        <div class="solution-card">
          <figure class="solution-card__thumb">
            <img
              src="https://raw.githubusercontent.com/thinkingjet/PTC/dev/src/Componenets/Solution/food_waste.jpeg"
              alt="by Nathan Dumlao"
              class="solution-card__image"
            ></img>
            <figcaption class="solution-card__caption">
              <h2 class="solution-card__title">Food Waste</h2>
              <p class="solution-card__snippet">
                Have you ever thrown out food that was still perfectly safe to
                eat? Rethinkably matches you with local organizations and
                individuals in need, allowing you to serve others in a more
                impactful way.
              </p>
              <a
                href="https://www.rubicon.com/blog/food-waste-facts/#:~:text=103%20million%20tons%20(206%20billion%20pounds)%20of%20food%20waste%20was,food%20produced%20for%20human%20consumption"
                class="solution-card__button"
              >
                Donate
              </a>
            </figcaption>
          </figure>
        </div>

        <div class="solution-card">
          <figure class="solution-card__thumb">
            <img
              src="https://raw.githubusercontent.com/thinkingjet/PTC/dev/src/Componenets/Solution/fast_fashion.jpeg"
              alt=" by Daniel Lincoln"
              class="solution-card__image"
            ></img>
            <figcaption class="solution-card__caption">
              <h2 class="solution-card__title">Fast Fashion</h2>
              <p class="solution-card__snippet">
                Trends come and go, but clothing itself always stays.
                Rethinkably matches you with individuals or organizations
                willing to accept old clothings and distribute it to the needy
                without increasing pollution or irresponsible consumption.{" "}
              </p>
              <a
                href="https://goodonyou.eco/what-is-fast-fashion/"
                class="solution-card__button"
              >
                Donate
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Solution;
