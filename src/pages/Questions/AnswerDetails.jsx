import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import Tag from "../../components/Tag/Tag";
import RichTextViewer from '../../components/RichTextViewer/RichTextViewer';
import moment from 'moment';

class AnswerDetails extends Component {
	state = {};
	render() {
		const { answer } = this.props;
		//console.log(answer);
		return (
			<section className="answer-container" key={`ans-${answer.id}`}>
				<div className="answer-details">
					<div className="voter">
						<span class="material-icons">arrow_drop_up</span>
						<div className="votes">{answer.upVotes - answer.downVotes}</div>
						<span class="material-icons">arrow_drop_down</span>
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
}

export default AnswerDetails;
