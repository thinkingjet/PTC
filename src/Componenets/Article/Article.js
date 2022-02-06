import React from "react";
import "./Article.css";

function Article() {
  return (
    <div className="article-container container-fluid d-flex justify-content-center">
      <h1 className="w-100">
        Learn More About <br />
        Responsible Production and Consumption
      </h1>
      <h4 className="home-img_quote">
        "Nature Provides A Free Lunch But Only If We <br /> Control Our Appetites."
      </h4>
      <h4 className="home-img_author">-William Ruckelshaus</h4>
      <a class="box-1" href="https://www1.undp.org/content/oslo-governance-centre/en/home/sustainable-development-goals/goal-12-responsible-consumption-and-production.html#:~:text=Achieving%20economic%20growth%20and%20sustainable,and%20consume%20goods%20and%20resources.&text=This%20can%20help%20with%20food,a%20more%20resource%20efficient%20economy.">
        <div class="article-btn article-btn-one">
           <span>Article</span>
        </div>
      </a>
    </div>
  );
}

export default Article;
