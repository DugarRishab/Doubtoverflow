import React, { Component, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import copy from 'copy-to-clipboard'

import QuesDetails from "./QuesDetails";
import "./Questions.css";
import AnswerDetails from "./AnswerDetails";
import Tag from "../../components/Tag/Tag";
import { useDispatch, useSelector } from "react-redux";
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";
import { postAnswer } from "../../redux/actions/questionAction";
import { alert } from "../../components/CustomAlert/alert";

const QuestionDetailsPanel = () => {
	const questionsList = useSelector((state) => state.question.allQuestions);
	const { id } = useParams();
	const question = questionsList.find((ques) => ques._id == id);
	const options = [
		"Highest Score (default)",
		"Date modified (newest first)",
		"Date Created (oldest first)",
	];
	const dispatch = useDispatch();
	const location = useLocation();
	const baseURL = 'http://localhost:3000/'
	const defaultOption = options[0];
	// console.log(questionsList);
	const [answer, setAnswer] = useState("");
	const [answerString, setAnswerString] = useState("");

	const handleAnswerInput = (val) => {
		setAnswer(JSON.stringify(val));
		setAnswerString(concatInput(val));
		//console.log(answerString.length);
	}
	const concatInput = (answer) => {
		let str = "";
		answer.forEach((ans) => {
			ans.children.forEach((child) => {
				str += child.text;
			});
		});
		return str;
	}
	const handleAnswerSubmit = () => {
		//console.log(concatInput(JSON.parse(answer)));
		console.log("length", answerString.length);
		//e.preventDefault();
		if (answerString.length > 5000) {
			alert({ message: "Please resolve all error before submitting", type: "error" });	
		}
		else if (answerString.length > 0) {
			//console.log("answer", answer);
			dispatch(postAnswer(answer, id));
		} 
		else {
			alert({ message: "Answer body cannot be empty", type: "error" });
		}
	}
	


	return (
		<div className="ques-panel">
			<div className="header">
				<h1>QUESTION DETAILS</h1>
				<Link to="/askquestion">
					<Button
						type="button"
						buttonType="primary"
						innerText="Ask Question"
					></Button>
				</Link>
			</div>
			{!question ? null : (
				<>
					<QuesDetails question={question}></QuesDetails>

					<div className="answer-header">
						<p>{`${question.answers.length} Answers`}</p>
						<Dropdown
							options={options}
							// onChange={this._onSelect}
							value={defaultOption}
							placeholder="Select an option"
							className="filter-dropdown"
							controlClassName="dropdown-control"
							menuClassName="dropdown-menu"
						/>
					</div>
					{question.answers.map((answer) => (
						<AnswerDetails answer={answer}></AnswerDetails>
					))}
					<section className="your-answer">
						<p>Your Answer</p>

						<form
							action=""
							onSubmit={
								answerString.length < 5000 ? (e) => handleAnswerSubmit(e) : null
							}
						>
							<RichTextEditor
								onChange={handleAnswerInput}
								initialValue = ""
							></RichTextEditor>
							{(answerString.length > 5000) ? (
							<p className="error-message">
								Character limit exceded by
								{answerString.length - 5000} characters
							</p>
						) : null}
							<Button
								type="button"
								innerText="Post your answer"
								buttonType="primary"
								onClick={handleAnswerSubmit}
							></Button>
						</form>
					</section>
					<div className="not-sure-section">
						Not the answer you're looking for? Browse other
						questions tagged
						{question.tags.map((tag) => (
							<Tag tag={tag} key={tag}></Tag>
						))}
						or
						<Link to="/askquestion"> ask your own question </Link>
					</div>
				</>
			)}
		</div>
	);
};

export default QuestionDetailsPanel;
