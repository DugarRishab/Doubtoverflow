import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import RichTextViewer from "../../components/RichTextViewer/RichTextViewer";
import Tag from "../../components/Tag/Tag";

class QuesDetails extends Component {
	state = {};
	render() {
		const { question } = this.props;
		return (
			<section className="ques-container">
				<div className="ques-header">
					<h1 className="ques-title">{question.title}</h1>
					<div className="ques-info">
						<div className="item">Asked Today</div>
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
					<div className="ques-user">
						<p>asked 15 mins ago</p>
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
}

export default QuesDetails;
