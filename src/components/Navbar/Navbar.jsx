import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../../assests/logo.png";

import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

class Navbar extends Component {
	state = {};
	render() {
		const user = null;
		return (
			<nav>
				<div className="navbar">
					<Link exact to="/" className="nav-item nav-btn logo">
						<img src={logo} alt="logo" />
					</Link>
					<Link to="/about" className="nav-item nav-btn">
						About
					</Link>
					<Link to="/products" className="nav-item nav-btn">
						Products
					</Link>
					<Link to="/teams" className="nav-item nav-btn">
						For Teams
					</Link>
					<form action="" className="nav-item search-bar">
						<input type="text" placeholder="Search..." />
						<span className="material-icons" width="18">
							search
						</span> 
					</form>
					{user === null ? (
						<Link to="/auth" className="nav-item nav-links">
							Log in
						</Link>
					) : (
						<React.Fragment>
							<Link to="/" className="">
								<Avatar user={user}></Avatar>
							</Link>
							<Button
								innerText="Log out"
								className="nav-links"
							></Button>
						</React.Fragment>
					)}
				</div>
			</nav>
		);
	}
}

export default Navbar;
