import React, { Component, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

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
	const defaultOption = options[0];
	// console.log(questionsList);
	const [answer, setAnswer] = useState("");

	const handleAnswerInput = (val) => {
		setAnswer(JSON.stringify(val));
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
		// console.log(JSON.parse(answer));
		if (concatInput(JSON.parse(answer)).length > 0) {
			console.log("answer", answer);
			dispatch(postAnswer(answer, id));
		} else {
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
						<RichTextEditor
							onChange={handleAnswerInput}
						></RichTextEditor>
						<form action="">
							{/* <textarea
								name=""
								id=""
								cols="30"
								rows="10"
							></textarea> */}

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
