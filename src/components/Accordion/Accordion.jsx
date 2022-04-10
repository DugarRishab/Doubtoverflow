import React, { useState } from "react";
import './Accordion.css';

const Accordion = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="accordion-item">
			<div
				className="accordion-title"
				onClick={() => setIsActive(!isActive)}
			>
				<div>{title}</div>
				<span className={`material-icons ${isActive ? "active": null}`}>arrow_drop_down</span>
				{/* <div>{isActive ? "-" : "+"}</div> */}
			</div>
			<div className={`accordion-content ${isActive && "open"}`}>
				{content}
			</div>
		</div>
	);
};

export default Accordion;
