import React, { Component } from "react";

import Menu from "../../components/Menu/Menu";
import HomeMainPanel from "../../components/HomeMainPanel/HomeMainPanel";
import RightPanel from "../../components/RightPanel/RightPanel";
import AllRoutes from "../../AllRoutes";

class Questions extends Component {
	state = {};
	render() {
		return (
			<div className="home-container">
				<Menu></Menu>

				<div className="main-body">
					<HomeMainPanel></HomeMainPanel>
					<RightPanel></RightPanel>
				</div>
			</div>
		);
	}
}

export default Questions;
