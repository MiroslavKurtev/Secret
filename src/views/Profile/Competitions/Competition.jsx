import React, { useState } from 'react';
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from '../../../components/Table';
import bg_Bg from '../../../languages/bg_BG.js';
import ProfileWorkout from '../ProfileWorkout.jsx';

const selected_language = bg_Bg;

const Competition = ({ competition }) => {
	const [isCompetitionActive, setCompetitionActive] = useState(false);

	const toggleCompetitionActive = () => {
		console.log(1, isCompetitionActive, JSON.stringify(competition));
		setCompetitionActive((prevState) => !prevState);
	};

	return (
		<div className='competition'>
			<div className='profile-competitions-title'>
				{competition.name + ' (' + competition.starts.length + ') '}
				{!isCompetitionActive && (
					<i
						className='fa-solid fa-caret-right'
						onClick={toggleCompetitionActive}
					></i>
				)}
				{isCompetitionActive && (
					<i
						className='fa-solid fa-caret-down'
						onClick={toggleCompetitionActive}
					></i>
				)}
			</div>
			{isCompetitionActive && (
				<div className='table-container'>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>{selected_language.day}</TableHead>
								<TableHead>{selected_language.date}</TableHead>
								<TableHead>{selected_language.type}</TableHead>
								<TableHead>{selected_language.place}</TableHead>
								<TableHead>{selected_language.time}</TableHead>
								<TableHead>{selected_language.time_first}</TableHead>
								<TableHead>{selected_language.distance}</TableHead>
								<TableHead>{selected_language.elevation}</TableHead>
								<TableHead>
									{selected_language.additional_information}
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{competition.starts.map((competition_day, count) => (
								<ProfileWorkout
									key={'c-d-' + competition_day.id}
									workout={competition_day}
									count={count}
								/>
							))}
						</TableBody>
					</Table>
				</div>
			)}
		</div>
	);
};

export default Competition;
