import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import Button from "../../components/Button/Button";
import RightPaneAcordians from "./RightPanelAcordians";
import "./AskQuestions.css";
import { alert, AlertContainer } from "../../components/CustomAlert/alert";
import "../../components/CustomAlert/CustomAlert.css";
import { askQuestion } from '../../redux/actions/questionAction';
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";

const AskQuestions = () => {
	const user = useSelector((state) => state.auth.user);
	const [title, setTitle] = useState("");
	const [tags, setTags] = useState([]);
	const [description, setDescription] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const redirect = () => {
		navigate("/auth");
	};

	const updateQuestionDetails = (e, obj) => {
		const val = e.target.value;
		switch (obj) {
			case "title":
				
				setTitle(val);
				// else alert({message: "Title cannot be "})
				break;
			case "description":
				setDescription(val);
				break;
			case "tags":
				
				setTags(
					val
						.trim()
						.split(" ")
						.filter((tag) => tag.length > 0)
				);
				
				
				break;
			default:
				alert({
					message: "Something went wrong. Please type again",
					type: "warning",
				});
				console.log("ERROR: ", val);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (description.length > 10000 || tags.length > 5 || title.length > 100) {
			alert({ message: "Please resolve all errors in the form before submitting", type: "error" });
			
		}
		else {
			console.log(user.name, "=>", { title, description, tags });
			dispatch(askQuestion({ title, tags, description, user }, navigate));
		}
	};

	const handleRichTextInput = val => {
		val = JSON.stringify(val);
		setDescription(val);
	}
	

	return (
		<React.Fragment>
			{user === null ? (
				redirect()
			) : (
				<div className="ask-ques-container">
					<h1 className="header">ASK A PUBLIC QUESTION</h1>
					<div className="contents">
						<div className="ask-ques">
							<form action="" onSubmit={(e) => handleSubmit(e)}>
								<div className="ask-form-container">
									<label htmlFor="ques-title">
										<h4>Title</h4>
										<p>
											Be specific and imagine you're
											asking a question to another person
										</p>
										<input
											type="text"
											name="ques-title"
											id="ques-title"
											className={
												title.length > 100
													? "error"
													: null
											}
											onChange={(e) =>
												updateQuestionDetails(
													e,
													"title"
												)
											}
										/>
										{title.length > 100 ? (
											<p className="error-message">
												Too Long by {title.length - 100}{" "}characters
											</p>
										) : null}
									</label>
									<label htmlFor="ques-body">
										<h4>Description</h4>
										<p>
											Include all the information someone
											would need to answer your question
										</p>
										{/* <textarea
											name="ques-body"
											id="ques-body"
											cols="30"
											rows="10"
											onChange={(e) =>
												updateQuestionDetails(
													e,
													"description"
												)
											}
										></textarea> */}
										<RichTextEditor
											onChange={handleRichTextInput}
										></RichTextEditor>
										{description.length > 10000 ? (
											<p className="error-message">
												Character limit exceded by {description.length - 100} characters
											</p>
										) : null}
									</label>
									<label htmlFor="ques-tags">
										<h4>Tags</h4>
										<p>
											Add up to 5 tags to describe what
											your question is about
										</p>
										<input
											type="text"
											onChange={(e) =>
												updateQuestionDetails(e, "tags")
											}
											name="ques-tags"
											id="ques-tags"
										/>
										{tags.length > 5 ? (
											<p className="error-message">
												Enter only 5 tags
											</p>
										) : null}
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
