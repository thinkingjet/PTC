import React from "react";
import "./Solution.css";

function Solution() {
  return (
    <div className="solution-container">
      <h1>Our Solutions</h1>
      <div className="solution-card-container container-fluid d-flex justify-content-center">
        <div class="solution-card">
          <figure class="solution-card__thumb">
            <img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="Picture by Kyle Cottrell" class="solution-card__image"></img>
            <figcaption class="solution-card__caption">
              <h2 class="solution-card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
              <p class="solution-card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
              <a href="" class="solution-card__button">Read more</a>
            </figcaption>
          </figure>
        </div>

        <div class="solution-card">
          <figure class="solution-card__thumb">
            <img src="https://source.unsplash.com/71u2fOofI-U/300x510" alt="Picture by Nathan Dumlao" class="solution-card__image"></img>
            <figcaption class="solution-card__caption">
              <h2 class="solution-card__title">This Is Your Body And Brain On Coffee</h2>
              <p class="solution-card__snippet">Drinking more caffeine during the coronavirus lockdown? Here's how it can affect you over time and advice on making it better for you.</p>
              <a href="" class="solution-card__button">Read more</a>
            </figcaption>
          </figure>
        </div>

        <div class="solution-card">
          <figure class="solution-card__thumb">
            <img src="https://source.unsplash.com/qXMpNtNp1uE/300x510" alt="Picture by Daniel Lincoln" class="solution-card__image"></img>
            <figcaption class="solution-card__caption">
              <h2 class="solution-card__title">Why You Should Bring Your Dog To Work</h2>
              <p class="solution-card__snippet">On Friday, offices around the country celebrated the 15th annual Take Your Dog to Work Day. Though the event's primary goal is to raise awareness for pet adoption, the unanticipated impact may be a slightly more relaxing work environment for any office choosing to participate.</p>
              <a href="" class="solution-card__button">Read more</a>
            </figcaption>
          </figure>
          </div>
      </div>
    </div>
  )
}

export default Solution;
