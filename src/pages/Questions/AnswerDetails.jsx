import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import Tag from "../../components/Tag/Tag";
import RichTextViewer from '../../components/RichTextViewer/RichTextViewer';
import Button from "../../components/Button/Button";
import moment from 'moment';
import copy from "copy-to-clipboard";
import { alert } from "../../components/CustomAlert/alert";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnswer, voteAnswer } from "../../redux/actions/questionAction";

const AnswerDetails = (props) => {
	const { answer, question } = props;
	const location = useLocation();
	const baseURL = "http://localhost:3000";
	const objID = answer._id;
	const user = useSelector((state) => state.auth.user) || {
		_id: null
	};
	const dispatch = useDispatch();

	const handleShare = () => {
		console.log('SHARE');
		copy(baseURL + location.pathname + '/#' + objID);
		alert({
			message: "Share link copied. URL: " + baseURL + location.pathname + '#/' + objID,
			type: "success",
		});
	};
	const handleDeleteAnswer = () => {
		dispatch(deleteAnswer(question._id, answer._id));
	};
	const handleVote = (vote) => {
		if (vote === "upVote") {
			if (!answer.upVotes.includes(user._id)) {
				dispatch(voteAnswer("upVote", question._id, answer._id));
			}
		} else {
			if (!answer.downVotes.includes(user._id)) {
				dispatch(voteAnswer("downVote", question._id, answer._id));
			}
		}
	};
	return (
		<section
			className="answer-container"
			// key={`ans-${answer.id}`}
			id={answer._id}
			key={answer._id}
		>
			<div className="answer-details">
				<div className="voter">
					<span
						className={`material-icons ${
							answer.upVotes.includes(user._id)
								? "success"
								: null
						}`}
						onClick={() => handleVote("upVote")}
					>
						arrow_drop_up
					</span>
					<div className="votes">
						{answer.upVotes.length - answer.downVotes.length}
					</div>
					<span
						className={`material-icons ${
							answer.downVotes.includes(user._id)
								? "success"
								: null
						}`}
						onClick={() => handleVote("downVote")}
					>
						arrow_drop_down
					</span>
				</div>
				<div className="answer-content">
					<div className="answer-body">
						<RichTextViewer
							text={JSON.parse(answer.body)}
						></RichTextViewer>
					</div>
				</div>
			</div>
			<div className="answer-user-details">
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
						disabled={user._id !== answer.user._id}
					></Button>
					<Button
						innerText="Delete"
						buttonType="tertiary"
						onClick={handleDeleteAnswer}
						disabled={user._id !== answer.user._id}
					></Button>
				</div>
				<div className="answer-user">
					<p>answered {moment(answer.dateCreated).fromNow()}</p>
					<Link to={`/users/${answer.user.id}`}>
						<div className="user-info">
							<Avatar></Avatar>
							<p>{answer.user.name}</p>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}
 
export default AnswerDetails;


