import React from "react";
import "./Form.css";

//CHANGE LOGO
function Form() {
  return (
    <main>

		<header class="d-flex justify-between">           
			<img src="https://i.ibb.co/tQdfThS/logo.png" alt="logo"></img>
		</header>

		<div class="d-flex w-100 justify-center align-center parallax">
			<div class="container d-flex flex-col justify-center align-center">
				<form action="/" method="post" id="signUp">
					<fieldset class="form d-flex flex-col align-start">

						<div class="title d-flex align-center justify-center">
							<legend style={{ color: "white" }}>Sign Up<br></br>Fast Fashion</legend>
						</div>

						<div class="input-box w-100 d-flex">
							<label for="email" class="d-flex align-center justify-center">
								<img src="https://i.ibb.co/RBj7wKt/mail.png" alt="mail"></img>
							</label>
							<input class="input-style w-100" id="email" type="email" placeholder="Email Address" required></input>
						</div>

						<div class="input-box w-100 d-flex">
							<label for="password" class="d-flex align-center justify-center">
								<img src="https://i.ibb.co/sJR25cg/key.png" alt="password"></img>
							</label>
							<input class="input-style w-100" type="password" id="password" placeholder="Password" required></input>
						</div>

						<div class="input-box w-100 d-flex">
							<label for="firstName" class="d-flex align-center justify-center">
								<img src="https://i.ibb.co/1LQdnLC/id.png" alt="firstName"></img>
							</label>
							<input class="input-style w-100" type="text" id="firstName" placeholder="First Name" required></input>
						</div>

						<div class="input-box w-100 d-flex">
							<label for="lastName" class="d-flex align-center justify-center">
								<img src="https://i.ibb.co/1LQdnLC/id.png" alt="lastName"></img>
							</label>
							<input class="input-style w-100" type="text" id="lastName" placeholder="Last Name" required></input>
						</div>

						<div class="input-box w-100 d-flex">
							<label for="province" class="d-flex align-center justify-center">
								<img src="https://i.ibb.co/rfDJsfK/location.png" alt="province"></img>
							</label>
							<select name="province" id="province" class="font input-style w-100" required>
								<option value="alberta">Alberta</option>
								<option value="britishColumbia">British Columbia</option>
								<option value="manitoba">Manitoba</option>
								<option value="newBrunswick">New Brunswick</option>
								<option value="newfoundlandAndLabrador">Newfoundland and Labrador</option>
								<option value="northwestTerritories">Northwest Territories</option>
								<option value="novaScotia">Nova Scotia</option>
								<option value="nunavut">Nunavut</option>
								<option value="ontario">Ontario</option>
								<option value="princeEdwardIsland">Prince Edward Island</option>
								<option value="quebec">Quebec</option>
								<option value="saskatchewan">Saskatchewan</option>
								<option value="yukon">Yukon</option>
							</select>
						</div>

						<label for="subscribe" class="subscribe d-flex w-100">
							<input type="checkbox" id="subscribe" name="subscribe"></input>
							<span>Subscribe to Newsletter</span>
						</label>

						<div class="d-flex justify-between align-center w-100 bottom">
							<div><span>Already a user?</span><a href="/login" class="login">Login</a></div>
							<button type="submit" form="signUp" value="Submit">Submit</button>
						</div>
					</fieldset>
				</form>
            </div>
		</div>
	</main>
  );
}

export default Form;


