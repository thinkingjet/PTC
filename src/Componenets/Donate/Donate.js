import React from "react";
import "./Donate.css";

function Donate() {
  return (
    <div class="donate-container">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-12 text-center">
            <h2 className="heading">Latest Donations</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 mb-5">
            <div class="person-donate text-center bg-light pt-4">
              <img
                src="https://raw.githubusercontent.com/thinkingjet/PTC/dev/src/Componenets/Donate/billgates.jpg"
                alt="bill"
                class="img-fluid"
                data-pagespeed-url-hash="3835002167"
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
              ></img>
              <div class="donate-info">
                <h2>Bill Gates</h2>
                <span class="time d-block mb-3">Donated 1 hours ago</span>
                <div class="donate-amount d-flex">
                  <div class="label">Donated</div>
                  <div class="amount">$1,150</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5">
            <div class="person-donate text-center bg-light pt-4">
              <img
                src="https://raw.githubusercontent.com/thinkingjet/PTC/dev/src/Componenets/Donate/rickastley.png"
                alt="bill"
                class="img-fluid"
                data-pagespeed-url-hash="4129502088"
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
              ></img>
              <div class="donate-info">
                <h2>Rick Astley</h2>
                <span class="time d-block mb-3">Donated 3 hours ago</span>
                <div class="donate-amount d-flex">
                  <div class="label">Donated</div>
                  <div class="amount">&#8734;</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5">
            <div class="person-donate text-center bg-light pt-4">
              <img
                src="https://raw.githubusercontent.com/thinkingjet/PTC/dev/src/Componenets/Donate/billgates.jpg"
                alt="ash"
                class="img-fluid"
                data-pagespeed-url-hash="4129502088"
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
              ></img>
              <div class="donate-info">
                <h2>Bill Gates</h2>
                <span class="time d-block mb-3">Donated 5 hours ago</span>
                <div class="donate-amount d-flex">
                  <div class="label">Donated</div>
                  <div class="amount">$200</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5">
            <div class="person-donate text-center bg-light pt-4">
              <img
                src="https://raw.githubusercontent.com/thinkingjet/PTC/dev/src/Componenets/Donate/billgates.jpg"
                alt="bill"
                class="img-fluid"
                data-pagespeed-url-hash="4129502088"
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
              ></img>
              <div class="donate-info">
                <h2>Bill Gates</h2>
                <span class="time d-block mb-3">Donated 6 hours ago</span>
                <div class="donate-amount d-flex">
                  <div class="label">Donated</div>
                  <div class="amount">$550</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
