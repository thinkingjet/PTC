import React from "react";
import "./Article.css";

function Article() {
  return (
    <div className="article-container container-fluid d-flex justify-content-center">
      <img
        className="article-img"
        src="https://raw.githubusercontent.com/thinkingjet/PTC/dev/src/Componenets/Article/img.jpg"
      ></img>
      <div className="article-info-container">
        <div className="article-inner-container">
          <h1 className="w-100">
            <br></br>Responsible Production and Consumption
          </h1>
          <a
            class="box-1"
            href="https://www1.undp.org/content/oslo-governance-centre/en/home/sustainable-development-goals/goal-12-responsible-consumption-and-production.html#:~:text=Achieving%20economic%20growth%20and%20sustainable,and%20consume%20goods%20and%20resources.&text=This%20can%20help%20with%20food,a%20more%20resource%20efficient%20economy."
          >
            <div class="article-btn article-btn-one">
              <span>Article</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Article;
