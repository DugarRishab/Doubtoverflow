import React, { Component } from 'react';
class Tabs extends Component {
	state = {  } 
	render() { 
		return (
			<div className="tab-container">
				<div className="tabs">
					<div className="tab active">
						<div className="title">Intresting</div>
					</div>
					<div className="tab">
						<div className="title">Newest</div>
					</div>
					<div className="tab">
						<div className="title">Unanswered</div>
					</div>
					<div className="tab">
						<div className="number">🔥</div>
						<div className="title">Week</div>
					</div>
					<div className="tab">
						<div className="number">🔥</div>
						<div className="title">Month</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default Tabs;