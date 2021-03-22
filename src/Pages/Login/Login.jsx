import React, { Component } from "react";
import Soa from "../../Images/SOALogo.png";
import SoaImage from "../../Images/SoaImage.png"
import "./Login.css";
import TextField from '@material-ui/core/TextField';
class Login extends Component {
	handleSubmit = e => {
		e.preventDefault();
		console.log(e.target.email.value);
		if (!e.target.email.value) {
			alert("Email is required");
		} else if (!e.target.email.value) {
			alert("Valid email is required");
		} else if (!e.target.password.value) {
			alert("Password is required");
		} else if (
			e.target.email.value === "admin@soa.ac.in" &&
			e.target.password.value === "password"
		) {
			alert("Successfully logged in");
			e.target.email.value = "";
			e.target.password.value = "";
		} else {
			alert("Wrong email or password combination");
		}
	};

	render() {
		return (
			<div className="mainDiv">
				<div className="LeftSide">
					<img className="soaImage" src={SoaImage} alt="" />
				</div>
				<div className="Login">
					<img src={Soa} className="logo" alt="S'O'A UNIVERSITY" />
					<h2 className="title">S'O'A University</h2>
					<h6 className="subTitle">Ranked as 20th Best University In India</h6>
					<h1 className="text-login">Log In</h1>
					<hr />
					<form className="form" onSubmit={this.handleSubmit}>
						<div className="input-group">
							<input type="email" name="email" placeholder="Enter Email ID" />
						</div>
						<div className="input-group">
							<TextField type="password" name="password" placeholder="Enter Password" appearance="standard" />
						</div>
						{/* <TextField
							id="standard-password-input"
							label="Password"
							type="password"
							autoComplete="current-password"
						/> */}
						<div className="out-links">
							<label >
								<input type="checkbox" />
								<span style={{
									padding: "10px",
								}}>Remember Me!</span>
							</label>
							<a rel="Forgot password" href="#">Forgot Password?</a>
						</div>
						<div className="out-buttons">
							<button className="primary">Login</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;