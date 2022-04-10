import React, { Component } from 'react';
//import Accordion from "react-bootstrap/Accordion";
//import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from '../../components/Accordion/Accordion';
//import "../../components/Accordion/Accordion.css"


const RightPanelAcordians = () => {
	return (
		<div className="rightSideAccordion" flush>
			<div className="item-1">
				<h4 className='header'>How to draft your question?</h4>
				<p>
					The community is here to help you with specific coding,
					algorithm, or language problems.
				</p>
				<p>Avoid asking opinion-based questions.</p>
				<Accordion
					title="1. summarize your problem"
					content={
						<ul className='accordion-list'>
							<li>Include details about your goal</li>
							<li>Describe expected and actual results</li>
							<li>Include any error messages</li>
						</ul>
					}
				></Accordion>
				<Accordion
					title="2. Describe what you've tried"
					content={
						"Show what you’ve tried and tell us what you found (on this site or elsewhere) and why it didn’t meet your needs. You can get better answers when you provide research."
					}
				></Accordion>
				<Accordion
					title={"3. Show some code"}
					content="When appropriate, share the minimum amount of code others need to reproduce your problem (also called a minimum, reproducible example)"
				></Accordion>
			</div>
		</div>
	);
}
 
export default RightPanelAcordians;