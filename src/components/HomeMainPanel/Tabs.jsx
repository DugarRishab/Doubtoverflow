import React, { Component } from 'react';
class Tabs extends Component {
	state = {  } 
	render() { 
		return (
			<div className="tab-container">
				<div className="tabs">
					<div className="tab active">
						<div className="number">40</div>
						<div className="title">Intresting</div>
					</div>
					<div className="tab">
						<div className="number">40</div>
						<div className="title">Bountied</div>
					</div>
					<div className="tab">
						<div className="number">100</div>
						<div className="title">Hot</div>
					</div>
					<div className="tab">
						<div className="number">4.1k</div>
						<div className="title">Week</div>
					</div>
					<div className="tab">
						<div className="number">40k</div>
						<div className="title">month</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default Tabs;