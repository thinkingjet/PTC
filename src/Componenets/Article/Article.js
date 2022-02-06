import React from "react";
import "./Article.css";

function Article() {
  return (
    <div className="article-container container-fluid d-flex justify-content-center">
      <h1 className="w-100">Responsible Production and Consumption</h1>
      <h4 className="home-img_quote">
        Nature Provides A Free Lunch But Only If We <br /> Control Our Appetites
      </h4>
      <h4 className="home-img_author">-William Ruckelshaus</h4>
      <div class="box-1">
        <div class="article-btn article-btn-one">
          <span>Article</span>
        </div>
      </div>
    </div>
  );
}

export default Article;
