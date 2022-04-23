import React, { Component } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import RichTextViewer from "../../components/RichTextViewer/RichTextViewer";
import Tag from "../../components/Tag/Tag";
import moment from "moment";
import Button from "../../components/Button/Button";
import copy from "copy-to-clipboard";
import { alert } from "../../components/CustomAlert/alert";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuestion, voteQuestion } from "../../redux/actions/questionAction";

const QuesDetails = (props) => {
	const { question } = props;
	const location = useLocation();
	const baseURL = "http://localhost:3000";
	const objID = question._id;
	const user = useSelector((state) => state.auth.user) || {
		_id: null
	};

	const handleShare = () => {
		console.log('SHARE');
		copy(baseURL + location.pathname + '#' + objID);
		alert({
			message: "Share link copied. URL: " + baseURL + location.pathname + '#' + objID,
			type: "success",
		});
	};
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleDeleteQuestion = () => {
		dispatch(deleteQuestion(question._id, navigate));
	}
	const handleVote = (vote) => {
		if (vote === "upVote") {
			if (!question.upVotes.includes(user._id)) {
				dispatch(voteQuestion("upVote", question._id));
			}
			
		} else {
			if (!question.downVotes.includes(user._id)) {
				dispatch(voteQuestion("downVote", question._id));
			}
		}
	};

	return (
		<section
			className="ques-container"
			id={question._id}
			key={question._id}
		>
			<div className="ques-header">
				<h1 className="ques-title">{question.title}</h1>
				<div className="ques-info">
					<div className="item">
						Asked {moment(question.dateCreated).fromNow()}
					</div>
					{/* <div className="item">Modified Today</div> */}
				</div>
			</div>
			<div className="ques-details">
				<div className="voter">
					<span
						className={`material-icons ${
							question.upVotes.includes(user._id)
								? "success"
								: null
						}`}
						onClick={() => handleVote("upVote")}
					>
						arrow_drop_up
					</span>
					<div className="votes">
						{question.upVotes.length - question.downVotes.length}
					</div>
					<span
						className={`material-icons ${
							question.downVotes.includes(user._id)
								? "error"
								: null
						}`}
						onClick={() => handleVote("downVote")}
					>
						arrow_drop_down
					</span>
				</div>
				<div className="ques-content">
					{/* <div className="ques-body">{question.description}</div> */}
					<RichTextViewer
						text={JSON.parse(question.description)}
					></RichTextViewer>
					<div className="ques-tags">
						{question.tags.map((tag) => (
							<Tag tag={tag}></Tag>
						))}
					</div>
				</div>
			</div>
			<div className="ques-user-details">
				<div className="action-btns">
					<Button
						innerText="Share"
						buttonType="tertiary"
						onClick={handleShare}
					></Button>
					<Button
						innerText="Edit"
						buttonType="tertiary"
						// onClick={}
						disabled={user._id !== question.user._id}
					></Button>
					<Button
						innerText="Delete"
						buttonType="tertiary"
						onClick={handleDeleteQuestion}
						disabled={user._id !== question.user._id}
					></Button>
				</div>

				<div className="ques-user">
					<p>asked {moment(question.dateCreated).fromNow()}</p>
					<Link to={`/users/${question.user._id}`}>
						<div className="user-info">
							<Avatar></Avatar>
							<p>{question.user.name}</p>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}
 
export default QuesDetails;
