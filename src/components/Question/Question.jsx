import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Question.css';
import Tag from '../Tag/Tag';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

class Question extends Component {
	state = {  } 
	render() { 
		const { question } = this.props;
		return (
			<div className="question">
				<div className="stats">
					<div className="item">{question.votes} votes</div>
					<div className="item answers">
						<Button
							innerText={question.answers.length + " answers"}
							buttonType="secondary"
						></Button>
					</div>

					<div className="item">{question.views} views</div>
				</div>
				<div className="content">
					<div className="title">
						<Link to={`/questions/${question.id}`}>{question.questionTitle}</Link>
					</div>
					<div className="tags">
						{question.questionTags.map((tag) => (
							<Tag tag={tag} small="true"></Tag>
						))}
					</div>
				</div>
				<div className="info">
					<div className="item user">
						<Avatar></Avatar>
						{question.userPosted}
					</div>
					<div className="item time">{question.time}</div>
				</div>
			</div>
		);
	}
}
 
export default Question;