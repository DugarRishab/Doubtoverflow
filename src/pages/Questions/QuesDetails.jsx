import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import RichTextViewer from "../../components/RichTextViewer/RichTextViewer";
import Tag from "../../components/Tag/Tag";
import moment from "moment";
import Button from "../../components/Button/Button";
import copy from "copy-to-clipboard";
import { alert } from "../../components/CustomAlert/alert";

const QuesDetails = (props) => {
	const { question } = props;
	const location = useLocation();
	const baseURL = "http://localhost:3000";

	const handleShare = () => {
		console.log('SHARE');
		copy(baseURL + location.pathname);
		alert({
			message: "Share link copied. URL: " + baseURL + location.pathname,
			type: "success",
		});
	};

	return ( <section className="ques-container">
				<div className="ques-header">
					<h1 className="ques-title">{question.title}</h1>
					<div className="ques-info">
						<div className="item">Asked { moment(question.dateCreated).fromNow()}</div>
						{/* <div className="item">Modified Today</div> */}
					</div>
				</div>
				<div className="ques-details">
					<div className="voter">
						<span class="material-icons">arrow_drop_up</span>
						<div className="votes">
							{question.upVotes - question.downVotes}
						</div>
						<span class="material-icons">arrow_drop_down</span>
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
					<Button innerText="Share" buttonType="tertiary" onClick={handleShare}></Button>
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
