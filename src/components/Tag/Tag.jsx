import React, { Component } from 'react';

import './tag.css';
class Tag extends Component {
	state = {  } 
	render() { 
		const { tag } = this.props;
		return (
			<div className='tag'>
				{tag}
			</div>
		);
	}
}
 
export default Tag;