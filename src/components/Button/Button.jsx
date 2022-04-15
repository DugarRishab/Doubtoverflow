import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	state = {}
	
	render() { 
		const { innerText, buttonType, type, onClick } = this.props;
		return (
			<button className={`btn btn--${ buttonType }`} type={ type } onClick={()=>onClick()} >{ innerText }</button>
		);
	}
}
 
export default Button;