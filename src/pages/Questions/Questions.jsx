import React, { Component } from "react";

import Menu from "../../components/Menu/Menu";
import RightPanel from "../../components/RightPanel/RightPanel";
import QuestionDetailsPanel from "./QuestionDetailsPanel";
import AllQuestionsPanel from "./AllQuestionsPanel";
import { useParams } from "react-router-dom";

const Questions = () => {
	const { id } = useParams();
	return (
		<div className="home-container">
			<Menu></Menu>

			<div className="main-body">
				{id ? (
					<QuestionDetailsPanel></QuestionDetailsPanel>
				) : (
					<AllQuestionsPanel></AllQuestionsPanel>
				)}
				<RightPanel></RightPanel>
			</div>
		</div>
	);
};

export default Questions;
