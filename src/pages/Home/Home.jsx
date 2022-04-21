import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

import Menu from "../../components/Menu/Menu";
import HomeMainPanel from "../../components/HomeMainPanel/HomeMainPanel";
import RightPanel from "../../components/RightPanel/RightPanel";
import AllRoutes from "../../AllRoutes";
import { getAllQuestions } from "../../redux/actions/questionAction";

const Home = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	//const select = useSelector();
	
	useEffect(() => {
		const queries = {
			size: 100,
			page: queryString.parse(location.search).page,
		};
		dispatch(getAllQuestions(queries));
		//setQuestionsList(select((state) => state.question.allQuestions));
	}, [dispatch, location]);
	return (
		<div className="home-container">
			<Menu></Menu>

			<div className="main-body">
				<HomeMainPanel></HomeMainPanel>
				<RightPanel></RightPanel>
			</div>
		</div>
	);
};

export default Home;
