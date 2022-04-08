import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";

class App extends Component {
	state = {};
	render() {
		return (
			<Router>
				<Navbar></Navbar>
				<AllRoutes></AllRoutes>
			</Router>
		);
	}
}

export default App;
