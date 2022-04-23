import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

import Menu from "../../components/Menu/Menu";
import RightPanel from "../../components/RightPanel/RightPanel";
import QuestionDetailsPanel from "./QuestionDetailsPanel";
import AllQuestionsPanel from "./AllQuestionsPanel";
import { useParams } from "react-router-dom";
import HomeMainPanel from "../../components/HomeMainPanel/HomeMainPanel";
import { getAllQuestions } from "../../redux/actions/questionAction";

const Questions = () => {
	const { id } = useParams();

	const location = useLocation();
	const dispatch = useDispatch();
	//const select = useSelector();
	
	useEffect(() => {
		const queries = {
			size: queryString.parse(location.search).size || 10,
			page: queryString.parse(location.search).page || 1,
			tag: queryString.parse(location.search).tag || null,
		};
		dispatch(getAllQuestions(queries));
		//setQuestionsList(select((state) => state.question.allQuestions));
	}, [dispatch, location]);
	
	return (
		<div className="home-container">
			<Menu></Menu>

			<div className="main-body">
				{id ? (
					<QuestionDetailsPanel></QuestionDetailsPanel>
				) : (
					<HomeMainPanel tabs={true} pagination={true}></HomeMainPanel>
				)}
				<RightPanel></RightPanel>
			</div>
		</div>
	);
};

export default Questions;
