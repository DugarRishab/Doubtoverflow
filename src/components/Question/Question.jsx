import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Question.css';
import Tag from '../Tag/Tag';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import moment from "moment";
class Question extends Component {
	state = {  } 
	render() { 
		const { question } = this.props;
		return (
			<div className="question">
				<div className="stats">
					<div className="item">{question.upVotes} votes</div>
					<div className="item answers">
						<Button
							innerText={question.answers.length + " answers"}
							buttonType="secondary"
						></Button>
					</div>

					{/* <div className="item">{question.views} views</div> */}
				</div>
				<div className="content">
					<div className="title">
						<Link to={`/questions/${question._id}`}>
							{question.title}
						</Link>
					</div>
					<div className="tags">
						{question.tags.map((tag) => (
							<Tag tag={tag} small="true"></Tag>
						))}
					</div>
				</div>
				<div className="info">
					<div className="item user">
						<Avatar></Avatar>
						{question.user.name}
					</div>
					<div className="item time">
						asked {moment(question.dateCreated).fromNow()}
					</div>
				</div>
			</div>
		);
	}
}
 
export default Question;