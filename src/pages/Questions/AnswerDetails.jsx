import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import Tag from "../../components/Tag/Tag";

class AnswerDetails extends Component {
	state = {};
	render() {
		const { answer } = this.props;
		return (
			<section className="answer-container" key={`ans-${answer.id}`}>
				<div className="answer-details">
					<div className="voter">
						<span class="material-icons">arrow_drop_up</span>
						<div className="votes">{answer.votes}</div>
						<span class="material-icons">arrow_drop_down</span>
					</div>
					<div className="answer-content">
						<div className="answer-body">{answer.body}</div>
					</div>
				</div>
				<div className="answer-user-details">
					<div className="answer-user">
						<p>asked 15 mins ago</p>
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
}

export default AnswerDetails;
