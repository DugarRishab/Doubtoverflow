import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import React, { Component, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";

const App = () => {
	const state = {};
	
	return (
		<Router>
			<Navbar></Navbar>
			
			<AllRoutes></AllRoutes>
		</Router>
	);
};

export default App;
