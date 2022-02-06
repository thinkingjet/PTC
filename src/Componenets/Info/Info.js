import React from "react";
import "./Info.css";
import { Link } from "react-router-dom";

function Info() {
  return (
    <div class="accordion-container">
      <div class="accordion-wrap">
        <div class="accordion">
          <div class="teaser">
            <div class="title">
              <h3>Fast Fashion</h3>
              <Link to="/contribute/clothes">
                <h7>(click here to donate)</h7>
              </Link>
            </div>
          </div>
          <div id="collapseOne">
            <div class="content">
              Fast Fashion describes cheap and trendy clothing. Much of it is
              based on current trends and celebrities, as well as pop culture.
              Because of this, fast fashion is produced, pushed out into stores,
              and discarded quickly.
            </div>
          </div>
        </div>

        <div class="accordion">
          <div class="teaser">
            <div class="title">
              <h3>Food Waste</h3>
              <Link to="/contribute/food">
                <h7>(click here to donate)</h7>
              </Link>
            </div>
          </div>
          <div id="collapseTwo">
            <div class="content">
              Food waste is the loss of edible food due to incidents such as
              spoilage, waste, or exposure to chemicals. This makes these food
              items unsafe to eat, even though they could been redistributed for
              nourishment.
            </div>
          </div>
        </div>

        <div class="accordion">
          <div class="teaser">
            <div class="title">
              <h3>Blood Donation</h3>
              <Link to="/contribute/blood">
                <h7>(click here to donate)</h7>
              </Link>
            </div>
          </div>
          <div id="collapseThree">
            <div class="content">
              Blood donation is a voluntary procedure performed by a qualified
              medical professional on an individual to extract blood and its
              contents. This blood is packaged and used for vital procedures
              such as transfusions or the development of medication.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
