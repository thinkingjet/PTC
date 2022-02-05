import React from "react";
import "./Card.css";
import fast_fashion_info from './fast_fashion_info.jpg';
import food_waste_info from './food_waste_info.jpg';
import blood_donation_info from './blood_donation_info.jpg';

function Card() {
  return (
      <>
        <div class="card-container">	               
            <div class="product-details">                   
                <h1>Fast Fashion</h1>
                <p class="information">information</p>         
                <div class="control">            
                    <button class="form-btn">
                        <span class="buy">Read More</span>
                    </button>  
                    <button class="form-btn">
                        <span class="buy">Donate</span>
                    </button>   
                </div>      
            </div>                                          
            <div class="product-image">              
                <img src={fast_fashion_info} alt=""></img>         
                <div class="info">
                    <h2> Description</h2>
                    <ul>
                        <li><strong>Height : </strong>5 Ft </li>
                        <li><strong>Shade : </strong>Olive green</li>
                        <li><strong>Decoration: </strong>balls and bells</li>
                        <li><strong>Material: </strong>Eco-Friendly</li>
                    </ul>
                </div>
            </div> 
        </div>   

        <div class="card-container">	               
            <div class="product-details">                   
                <h1>Food Waste</h1>
                <p class="information">information</p>         
                <div class="control">            
                    <button class="form-btn">
                        <span class="buy">Read More</span>
                    </button>  
                    <button class="form-btn">
                        <span class="buy">Donate</span>
                    </button>   
                </div>      
            </div>                                          
            <div class="product-image">              
                <img src={food_waste_info} alt=""></img>         
                <div class="info">
                    <h2> Description</h2>
                    <ul>
                        <li><strong>Height : </strong>5 Ft </li>
                        <li><strong>Shade : </strong>Olive green</li>
                        <li><strong>Decoration: </strong>balls and bells</li>
                        <li><strong>Material: </strong>Eco-Friendly</li>
                    </ul>
                </div>
            </div> 
        </div>   

        <div class="card-container">	               
            <div class="product-details">                   
                <h1>Blood Donation</h1>
                <p class="information">information</p>         
                <div class="control">            
                    <button class="form-btn">
                        <span class="buy">Read More</span>
                    </button>  
                    <button class="form-btn">
                        <span class="buy">Donate</span>
                    </button>   
                </div>      
            </div>                                          
            <div class="product-image">              
                <img src={blood_donation_info} alt=""></img>         
                <div class="info">
                    <h2> Description</h2>
                    <ul>
                        <li><strong>Height : </strong>5 Ft </li>
                        <li><strong>Shade : </strong>Olive green</li>
                        <li><strong>Decoration: </strong>balls and bells</li>
                        <li><strong>Material: </strong>Eco-Friendly</li>
                    </ul>
                </div>
            </div> 
        </div>   
    </>
  );
}

export default Card;






