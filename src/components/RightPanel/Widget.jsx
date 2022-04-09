import React, { Component } from "react";

class Widget extends Component {
	state = {};
	render() {
		const { widget } = this.props;
		return (
			<div className="widget">
				<h4 className="title">{widget.title}</h4>
				{widget.items.map((item) => (
					<div className="widget-item">
						<span className="material-icons">edit</span>
						<p>{item.text}</p>
					</div>
				))}
			</div>
		);
	}
}

export default Widget;
