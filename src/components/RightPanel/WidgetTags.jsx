import React, { Component } from "react";
import Tag from "../Tag/Tag";

class WidgetTags extends Component {
	state = {};
	render() {
		const { tags } = this.props;
		return (
			<div className="widget-tags">
				<h4 className="title">Watched Tags</h4>
				<div className="tags">
					{tags.map((tag) => (
						<Tag key={tag} tag={tag}></Tag>
					))}
				</div>
			</div>
		);
	}
}

export default WidgetTags;
