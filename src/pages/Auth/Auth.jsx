import React, { Component } from "react";

import logo from "../../assests/logo.png";
import "./Auth.css";
import InputText from "../../components/InputText/InputText";
import Button from "../../components/Button/Button";
import AboutAuth from "./AboutAuth";

class Auth extends Component {
	state = {
		isSignedup: false,
	};
	handleSwitch = () => {
		const isSignedup = !this.state.isSignedup;
		this.setState({ isSignedup });
	};
	render() {
		return (
			<section className="auth-section">
				{!this.state.isSignedup && <AboutAuth />}
				<div className="auth-container">
					{this.state.isSignedup ? <img src={logo} alt="" /> : null}

					<form action="">
						{!this.state.isSignedup ? (
							<InputText type="text" label="NAME"></InputText>
						) : null}
						<InputText type="email" label="EMAIL"></InputText>
						<InputText
							type="password"
							label="PASSWORD"
							optionalInnerHtml={
								this.state.isSignedup ? (
									<div className="link">forgot password?</div>
								) : null
							}
						></InputText>
						{!this.state.isSignedup ? (
							<InputText
								type="password"
								label="CONFIRM PASSWORD"
							></InputText>
						) : null}
						{!this.state.isSignedup ? (
							<p className="sub-text">
								Passwords must contain at least eight
								characters, including at least 1 letter and 1
								number.
							</p>
						) : null}
						{this.isSignedup ? (
							<label htmlFor="check">
								<input
									type="checkbox"
									name="check"
									id="check"
								/>
								<p>
									Never miss a thing. Sign up here for our
									newsletter and occasional product updates.
								</p>
							</label>
						) : null}
						<Button
							type="submit"
							buttonType="primary"
							innerText={
								this.state.isSignedup ? "Log in" : "Sign up"
							}
						></Button>
						{!this.state.isSignedup ? (
							<p className="sub-text">
								By clicking “Sign up”, you agree to our{" "}
								<a href="#" className="link">
									terms of service
								</a>
								,{" "}
								<a href="#" className="link">
									privacy policy
								</a>{" "}
								and{" "}
								<a href="#" className="link">
									cookie policy
								</a>
							</p>
						) : null}
					</form>
					<div className="sub-text handle-switch-item">
						{!this.state.isSignedup
							? "Already have an account?"
							: "Dont have an account?"}
						<Button
							type="Button"
							className="handle-switch-btn"
							buttonType="tertiary"
							onSwitch={this.handleSwitch}
							innerText={
								!this.state.isSignedup ? "Log in" : "Sign up"
							}
						></Button>
					</div>
				</div>
			</section>
		);
	}
}

export default Auth;
