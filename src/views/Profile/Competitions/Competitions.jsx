import React, { useState } from 'react';
import Competition from './Competition.jsx';

import './Competitions.css';
import bg_Bg from '../../../languages/bg_BG.js';
import competitions from './dummyData_competitions.js';

const selected_language = bg_Bg;

const Competitions = () => {
	const [isCompetitionsActive, setCompetitionsActive] = useState(false);

	const toggleCompetitionsActive = () => {
		setCompetitionsActive((prevState) => !prevState);
	};

	return (
		<div className='profile-competitions'>
			<div className='profile-competitions-title'>
				Competitions ({competitions.length}){' '}
				{!isCompetitionsActive && (
					<i
						className='fa-solid fa-caret-right'
						onClick={toggleCompetitionsActive}
					></i>
				)}
				{isCompetitionsActive && (
					<i
						className='fa-solid fa-caret-down'
						onClick={toggleCompetitionsActive}
					></i>
				)}
			</div>
			{isCompetitionsActive && (
				<div className='competitions-container'>
					{competitions.map((competition) => (
						<Competition
							competition={competition}
							key={'c-' + competition.id}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Competitions;
