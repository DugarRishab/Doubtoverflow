import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './HomeMainPanel.css';

import Question from '../Question/Question';
import Button from '../Button/Button';
import Tabs from './Tabs';

const HomeMainPanel = () => {
	const questionsList = [
		{
			id: 1,
			votes: 3,
			questionTitle:
				"Need to re-render component after state is set to true",
			questionBody: `n my react app, I have a page that allows the user to "add" exercises to a personal list. The option to add an exercise is included in one "page" and the ability to see added exercises is view in a other. Side by side showing the two pages, notice 'Your Exercises' is empty. What I am trying to do is display these selected exercises. The exercises themselves are loaded via mapping function, from an array of objects. each object has a "selected" field and are set as "false" by default. My "add" button in the exercises page changes the state value of each component to "true", so now what I want to do is get these "true" values and render them on the page where it should show your exercises.`,
			userPosted: "naman",
			questionTags: ["reactjs"],
			time: "01-01-2022",
			views: "15",
			lastEditedOn: "21-01-2022",
			answers: [
				{
					id: "",
					votes: "",
					body: "",
					time: "",
					views: "",
					userPosted: "",
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
			userPosted: "niket",
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
					userPosted: "",
					lastEditedOn: "",
				},
				{
					id: "",
					votes: "",
					body: "",
					time: "",
					views: "",
					userPosted: "",
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
			userPosted: "rishab",
			questionTags: ["reactjs", "nodejs", "redux", "html", "css", "express", "mongodb", "mongoose", "react", "cpp", "c"],
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
					userPosted: "",
					lastEditedOn: "",
				},
				{
					id: "",
					votes: "",
					body: "",
					time: "",
					views: "",
					userPosted: "",
					lastEditedOn: "",
				},
				{
					id: "",
					votes: "",
					body: "",
					time: "",
					views: "",
					userPosted: "",
					lastEditedOn: "",
				},
			],
		},
	];
	const location = useLocation();

	return (
		<div className="home-main-panel">
			<div className="header">
				{location.pathname === "/" ? (
					<h1 className="title">Top Questions</h1>
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
			<Tabs></Tabs>
			<div className="contents">
				{questionsList === null ? (
					<h1>Loading...</h1>
				) : (
					<React.Fragment>
						{/* <p>{questionsList.length} questions</p> */}
						<div className="questions">
							{questionsList.map((question) => (
								<Question
									question={question}
									key={question.id}
								></Question>
							))}
						</div>
					</React.Fragment>
				)}
			</div>
		</div>
	);
}
 
  
export default HomeMainPanel;