import React, { Component } from 'react';

import './tag.css';
class Tag extends Component {
	state = {  } 
	render() { 
		const { tag, small } = this.props;
		return (
			<div className={
				small ? "tag small" : "tag"
			}>
				{tag}
			</div>
		);
	}
}
 
export default Tag;