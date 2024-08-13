import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../components/Table.jsx';
import Competition from './Competition.jsx';

import './Competitions.css';
import bg_Bg from '../../../languages/bg_BG.js';
import competitions from './dummyData_competitions.js';

const selected_language = bg_Bg;

const Competitions = () => {
  const [isCompetitionsActive, setCompetitionsActive] = useState(false);

  const [isCompetitionActive, setCompetitionActive] = useState(false);

  const toggleWorkoutsActive = (toggleFunc) => {
    toggleFunc((prevState) => !prevState);
  };

  return (
    <div className='profile-competitions'>
      <div className='profile-competitions-title'>
        Competitions ({competitions.length}){' '}
        {!isCompetitionsActive && (
          <i
            className='fa-solid fa-caret-right'
            onClick={toggleWorkoutsActive(setCompetitionsActive)}
          ></i>
        )}
        {isCompetitionsActive && (
          <i
            className='fa-solid fa-caret-down'
            onClick={toggleWorkoutsActive(setCompetitionsActive)}
          ></i>
        )}
      </div>
      {isCompetitionsActive && (
        <div>
          {competitions.map((competition_day, count) => (
            <div className='competition'>
              <div className='profile-competitions-title'>
                Competitions ({competition_day.starts.length}){' '}
                {!isCompetitionsActive && (
                  <i
                    className='fa-solid fa-caret-right'
                    onClick={toggleWorkoutsActive(setCompetitionActive)}
                  ></i>
                )}
                {isCompetitionsActive && (
                  <i
                    className='fa-solid fa-caret-down'
                    onClick={toggleWorkoutsActive(setCompetitionActive)}
                  ></i>
                )}
              </div>
              <div className='table-container'>
                {/* <Table>
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
                    {competitions.map((competition_day, count) => (
                      <Competition
                        key={'c-' + workout.id}
                        competition_day={competition_day}
                        count={count}
                      />
                    ))}
                  </TableBody>
                </Table> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Competitions;
