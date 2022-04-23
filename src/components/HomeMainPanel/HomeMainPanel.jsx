import React, { Component, useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";

import "./HomeMainPanel.css";

import Question from "../Question/Question";
import Button from "../Button/Button";
import Tabs from "./Tabs";
import { getAllQuestions } from "../../redux/actions/questionAction";

const HomeMainPanel = (props) => {
	const questionsList = useSelector(state => state.question.allQuestions);
	
	const location = useLocation();
	
	const { tabs, title } = props;
	
	return (
		<div className="home-main-panel">
			<div className="header">
				{location.pathname === "/" ? (
					<h1 className="title">Top Questions</h1>
				) : queryString.parse(location.search).tag != null ? (
					<h1 className="title">
						Top Question with tag:{" "}
						{queryString.parse(location.search).tag}
					</h1>
				) : (
					<h1 className="title">All Questions</h1>
				)}
				<Link to="/askquestion" className="ask-btn">
					<Button
						type="button"
						buttonType="primary"
						innerText="Ask Question"
					></Button>
				</Link>
			</div>
			{tabs ? <Tabs></Tabs> : null}

			<div className="contents">
				{questionsList.length === 0 ? (
					<h3>No Questions Found</h3>
				) : (
					<>
						{/* <p>{questionsList.length} questions</p> */}
						<div className="questions">
							{questionsList.map((question) => (
								<Question
									question={question}
									key={question.id}
								></Question>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default HomeMainPanel;
