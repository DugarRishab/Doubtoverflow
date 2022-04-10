import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Questions from './pages/Questions/Questions';
import AskQuestions from './pages/AskQuestions/AskQuestions';

class AllRoutes extends Component {
	state = {  } 
	render() { 
		return (
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route exact path="/auth" element={<Auth />}></Route>
				<Route exact path="/questions/:id" element={<Questions />}></Route>
				<Route exact path="/askquestion" element={<AskQuestions />}></Route>
			</Routes>
		);
	}
}
 
export default AllRoutes; 