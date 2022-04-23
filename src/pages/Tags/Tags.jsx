import React, { Component } from 'react';

import Tag from '../../components/Tag/Tag';
import tagList from './TagList.json';
import TagItem from './TagItem';
import Menu from '../../components/Menu/Menu';
import './Tag.css';

const Tags = () => {
	return (
		<div className="home-container">
			<Menu></Menu>
			<div className="main-body tag-page">
				<header>
					<h1>Some popular Tags</h1>
					<p>
						A tag is a keyword or label that categorizes your
						question with other, similar questions. Using the right
						tags makes it easier for others to find and answer your
						question.
					</p>
				</header>
				{tagList.map((tag) => {
					return <TagItem tag={tag}></TagItem>;
				})}
			</div>
		</div>
	);
}
 
export default Tags;