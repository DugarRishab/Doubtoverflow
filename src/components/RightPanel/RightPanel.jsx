import React, { Component } from 'react';
import Widget from './Widget';
import WidgetTags from './WidgetTags';
import './RightPanel.css';

class RightPanel extends Component {
	state = {
		widgets: [
			{
				title: "The Overflow Blog",
				items: [
					{
						type: "blog",
						text: "Use Git tactically",
					},
					{
						type: "blog",
						text: "You should be reading academic computer science papers",
					},
				],
			},
			{
				title: "Featured on Meta",
				items: [
					{
						type: "question",
						text: "How might the Staging Ground & the new Ask Wizard work on the Stack Exchange...",
					},
					{
						type: "comment",
						text: "The Future of our Jobs Ad slots",
					},
					{
						type: "comment",
						text: "Review our technical responses for the 2022 Developer Survey",
					},
					{
						type: "comment",
						text: "Staging Ground Workflow: Listings, Filters, Quality Control, and Notifications",
					},
				],
			},
			{
				title: "Hot Meta Posts",
				items: [
					{
						type: "post",
						text: ` What's the best way to post a "How to ask a good question?" article for a...`,
						views: 9
					},
				],
			},
		],
		tags:["nodejs", "html", "css", "express", "mongoose", "mongodb", "c", "cpp", "javascript", "js", "vanillajs", "reactjs", "redux", ],
	};
	render() {
		return (
			<aside className="right-panel">
				{this.state.widgets.map((widget) => (
					<Widget key={widget.title} widget={widget}></Widget>
				))}
				<WidgetTags tags={this.state.tags}></WidgetTags>
			</aside>
		);
	}
}

export default RightPanel;