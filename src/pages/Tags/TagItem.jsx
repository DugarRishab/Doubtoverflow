import React, { Component } from 'react';
import { Link } from "react-router-dom";

const TagItem = (props) => {
	const { tag } = props;
	return (
		<div className="tag-item">
			<Link exact to={`/questions?tag=${tag.tag}&size=100`} activeClass="active">
				<h5>{tag.tag}</h5>
			</Link>

			<p>{tag.description}</p>
		</div>
	);
}
 
export default TagItem;