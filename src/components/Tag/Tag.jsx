import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './tag.css';
class Tag extends Component {
	state = {  } 
	render() { 
		const { tag, small } = this.props;
		return (
			<Link
				exact
				to={`/questions?tag=${tag}&size=100`}
				activeClass="active"
			>
				<div className={small ? "tag small" : "tag"}>{tag}</div>
			</Link>
		);
	}
}
 
export default Tag;