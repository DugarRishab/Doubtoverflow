import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import RightPaneAcordians from "./RightPanelAcordians";
import "./AskQuestions.css";

const AskQuestions = () => {
	const user = 1;
	const navigate = useNavigate();

	const redirect = () => {
		//alert("Login or Signup to ask a question");
		navigate("/auth");
	};
	
	return (
		<React.Fragment>
			{user === null ? (
				redirect()
			) : (
				<div className="ask-ques-container">
					<h1 className="header">ASK A PUBLIC QUESTION</h1>
					<div className="contents">
						<div className="ask-ques">
							<form action="">
								<div className="ask-form-container">
									<label htmlFor="ques-title">
										<h4>Title</h4>
										<p>
											Be specific and imagine you’re
											asking a question to another person
										</p>
										<input
											type="text"
											name="ques-title"
											id="ques-title"
										/>
									</label>
									<label htmlFor="ques-body">
										<h4>Description</h4>
										<p>
											Include all the information someone
											would need to answer your question
										</p>
										<textarea
											name="ques-body"
											id="ques-body"
											cols="30"
											rows="10"
										></textarea>
									</label>
									<label htmlFor="ques-tags">
										<h4>Tags</h4>
										<p>
											Add up to 5 tags to describe what
											your question is about
										</p>
										<input
											type="text"
											name="ques-tags"
											id="ques-tags"
										/>
									</label>
								</div>
								<Button
									type="submit"
									buttonType="primary"
									innerText="Review your Question"
								></Button>
							</form>
						</div>
						<div className="right-panel">
							
							<RightPaneAcordians></RightPaneAcordians>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default AskQuestions;
