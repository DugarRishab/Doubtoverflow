import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';

class AllRoutes extends Component {
	state = {  } 
	render() { 
		return (
			<Routes>
				<Route exact path="/" element={<Home/>}></Route>
				<Route exact path="/auth" element={<Auth/>}></Route>
			</Routes>
		);
	}
}
 
export default AllRoutes; 