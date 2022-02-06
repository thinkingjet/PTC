import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
      ></link>
      <div class="footer-basic">
        <footer>
          <div class="social">
            <a href="/">
              <i class="icon ion-social-instagram"></i>
            </a>
            <a href="/">
              <i class="icon ion-social-snapchat"></i>
            </a>
            <a href="/">
              <i class="icon ion-social-twitter"></i>
            </a>
            <a href="/">
              <i class="icon ion-social-facebook"></i>
            </a>
          </div>
          <ul class="list-inline">
            <a href="/">
              <li class="list-inline-item">Home</li>
            </a>
            <a href="/">
              <li class="list-inline-item">Services</li>
            </a>
            <a href="/">
              <li class="list-inline-item">About</li>
            </a>
            <a href="/">
              <li class="list-inline-item">Terms</li>
            </a>
            <a href="/">
              <li class="list-inline-item">Privacy Policy</li>
            </a>
          </ul>
          <p class="copyright">cL Earth © 2021</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
