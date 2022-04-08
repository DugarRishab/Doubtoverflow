import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	state = {  } 
	render() { 
		const { innerText } = this.props;
		return (
			<button>{ innerText }</button>
		);
	}
}
 
export default Button;