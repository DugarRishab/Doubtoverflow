import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

class Menu extends Component {
	state = {  } 
	render() { 
		return (
			<div className="menu">
				<nav className="menu-nav">
					<NavLink
						to="/"
						className="menu-item menu-link"
						activeClass="active"
					>
						<p>Home</p>
					</NavLink>
					<NavLink
						to="/questions"
						className="menu-item menu-link "
						activeClass="active"
					>
						<p>Questions</p>
					</NavLink>
					<NavLink
						to="/tags"
						className="menu-item menu-link"
						activeClass="active"
					>
						<p>Tags</p>
					</NavLink>
					<NavLink
						to="/users"
						className="menu-item menu-link"
						activeClass="active"
					>
						<p>Users</p>
					</NavLink>
					<NavLink
						to="/companies"
						className="menu-item menu-link"
						activeClass="active"
					>
						<p>Companies</p>
					</NavLink>
					{/* <div className="menu-items">
						<div className="title">PUBLIC</div>
						
					</div> */}
				</nav>
			</div>
		);
	}
}
 
export default Menu;