import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	state = {}
	
	render() { 
		const { innerText, buttonType, type, onClick, disabled } = this.props;
		return !disabled ? (
			<button
				className={`btn btn--${buttonType}`}
				type={type}
				onClick={() => onClick()}
			>
				{innerText}
			</button>
		) : (
			<button
				className={`btn btn--${buttonType} disabled`}
				type={type}
				
			>
				{innerText}
			</button>
		);
	}
}
 
export default Button;