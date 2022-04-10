import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import Tag from "../../components/Tag/Tag";

class QuesDetails extends Component {
	state = {};
	render() {
		const { question } = this.props;
		return (
			<section className="ques-container">
				<div className="ques-header">
					<h1 className="ques-title">{question.questionTitle}</h1>
					<div className="ques-info">
						<div className="item">Asked Today</div>
						<div className="item">Modified Today</div>
						<div className="item">
							Viewed {question.views} times
						</div>
					</div>
				</div>
				<div className="ques-details">
					<div className="voter">
						<span class="material-icons">arrow_drop_up</span>
						<div className="votes">{question.votes}</div>
						<span class="material-icons">arrow_drop_down</span>
					</div>
					<div className="ques-content">
						<div className="ques-body">{question.questionBody}</div>
						<div className="ques-tags">
							{question.questionTags.map((tag) => (
								<Tag tag={tag}></Tag>
							))}
						</div>
					</div>
				</div>
				<div className="ques-user-details">
					<div className="ques-user">
						<p>asked 15 mins ago</p>
						<Link to={`/users/${question.user.id}`}>
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
}

export default QuesDetails;
