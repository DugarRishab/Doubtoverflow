import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import QuesDetails from "./QuesDetails";
import "./Questions.css";
import AnswerDetails from "./AnswerDetails";
import Tag from "../../components/Tag/Tag";

const QuestionDetailsPanel = () => {
	const questionsList = [
		{
			id: 1,
			votes: 3,
			questionTitle:
				"Need to re-render component after state is set to true",
			questionBody: `In my react app, I have a page that allows the user to "add" exercises to a personal list. The option to add an exercise is included in one "page" and the ability to see added exercises is view in a other. Side by side showing the two pages, notice 'Your Exercises' is empty. What I am trying to do is display these selected exercises. The exercises themselves are loaded via mapping function, from an array of objects. each object has a "selected" field and are set as "false" by default. My "add" button in the exercises page changes the state value of each component to "true", so now what I want to do is get these "true" values and render them on the page where it should show your exercises.`,
			user: {
				name: "naman",
				id: "1",
			},
			questionTags: ["reactjs"],
			time: "01-01-2022",
			views: "15",
			lastEditedOn: "21-01-2022",
			answers: [
				{
					id: "1",
					votes: "3",
					body: "You could stick with a CASE expression but use COALESCE to make it more succinct: As a long time MySQL user, I often find myself using CASE more than IF() as the former allows omitting the ELSE condition entirely. IF() on the other hand always requires an explicit else value.",
					time: "",
					views: "12",
					user: {
						name: "rishab",
						id: "3",
					},
					lastEditedOn: "",
				},
			],
		},
		{
			id: 2,
			votes: 5,
			questionTitle:
				"Need to re-render component after state is set to true, lorem nefw nujew nujvw fewhu hnvujdiw nhuviodwnbio ",
			questionBody: `n my react app, I have a page that allows the user to "add" exercises to a personal list. The option to add an exercise is included in one "page" and the ability to see added exercises is view in a other. Side by side showing the two pages, notice 'Your Exercises' is empty. What I am trying to do is display these selected exercises. The exercises themselves are loaded via mapping function, from an array of objects. each object has a "selected" field and are set as "false" by default. My "add" button in the exercises page changes the state value of each component to "true", so now what I want to do is get these "true" values and render them on the page where it should show your exercises.`,
			user: {
				name: "niket",
				id: "2",
			},
			questionTags: ["reactjs", "angluar", "javascript", "vanillajs"],
			time: "01-01-2022",
			views: 100,
			lastEditedOn: "21-01-2022",
			answers: [
				{
					id: "",
					votes: "",
					body: "",
					time: "",
					views: "",
					user: {
						name: "naman",
						id: "1",
					},
					lastEditedOn: "",
				},
				{
					id: "",
					votes: "",
					body: "",
					time: "",
					views: "",
					user: {
						name: "rishab",
						id: "3",
					},
					lastEditedOn: "",
				},
			],
		},
		{
			id: 3,
			votes: 5,
			questionTitle:
				"Need to re-render component after state is set to true",
			questionBody: `n my react app, I have a page that allows the user to "add" exercises to a personal list. The option to add an exercise is included in one "page" and the ability to see added exercises is view in a other. Side by side showing the two pages, notice 'Your Exercises' is empty. What I am trying to do is display these selected exercises. The exercises themselves are loaded via mapping function, from an array of objects. each object has a "selected" field and are set as "false" by default. My "add" button in the exercises page changes the state value of each component to "true", so now what I want to do is get these "true" values and render them on the page where it should show your exercises.`,
			user: {
				name: "rishab",
				id: "3",
			},
			questionTags: [
				"reactjs",
				"nodejs",
				"redux",
				"html",
				"css",
				"express",
				"mongodb",
				"mongoose",
				"react",
				"cpp",
				"c",
			],
			time: "01-01-2022",
			views: 200,
			lastEditedOn: "21-01-2022",
			answers: [
				{
					id: "",
					votes: "",
					body: "",
					time: "",
					views: "",
					user: {
						name: "niket",
						id: "2",
					},
					lastEditedOn: "",
				},
				{
					id: "",
					votes: "",
					body: "",
					time: "",
					views: "",
					user: {
						name: "naman",
						id: "1",
					},
					lastEditedOn: "",
				},
				{
					id: "",
					votes: "",
					body: "",
					time: "",
					views: "",
					user: {
						name: "rishab",
						id: "3",
					},
					lastEditedOn: "",
				},
			],
		},
	];
	const { id } = useParams();
	const question = questionsList.find((ques) => ques.id == id);
	const options = [
		"Highest Score (default)",
		"Date modified (newest first)",
		"Date Created (oldest first)",
	];
	const defaultOption = options[0];

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
			<QuesDetails question={question}></QuesDetails>
			{question.answers.map((ans) => (
				<div className="ans-details"></div>
			))}

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
				<form action="">
					<textarea name="" id="" cols="30" rows="10"></textarea>
					<Button
						type="submit"
						innerText="Post your answer"
						buttonType="primary"
					></Button>
				</form>
			</section>
			<div className="not-sure-section">
				Not the answer you're looking for? Browse other questions tagged
				{
					question.questionTags.map(tag => (
						<Tag tag={tag} key={tag}></Tag>
					))
				}
				or
				<Link to="/askquestion"> ask your own question </Link>
			</div>
		</div>
	);
};

export default QuestionDetailsPanel;
