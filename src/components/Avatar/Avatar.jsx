import React, { Component } from 'react';
import './Avatar.css';

class Avatar extends Component {
	state = {  } 
	render() { 
		const { user } = this.props;
		return (
			<div className="avatar">
				<span class="material-icons">person</span>
			</div>
		);
	}
}
 
export default Avatar;