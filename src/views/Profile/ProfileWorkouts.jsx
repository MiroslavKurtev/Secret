import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/Table';
import ProfileWorkout from './ProfileWorkout';

import './ProfileWorkouts.css';
import bg_Bg from '../../languages/bg_BG.js';
import workouts from './dummyData_workouts.js';

const selected_language = bg_Bg;

const ProfileWorkouts = () => {
  const [workoutsActive, setWorkoutsActive] = useState(false);

  const toggleWorkoutsActive = () => {
    setWorkoutsActive((prevState) => !prevState);
  };

  return (
    <div className='profile-workouts'>
      <div className='profile-workouts-title'>
        Workouts ({workouts.length}){' '}
        {!workoutsActive && (
          <i
            className='fa-solid fa-caret-right'
            onClick={toggleWorkoutsActive}
          ></i>
        )}
        {workoutsActive && (
          <i
            className='fa-solid fa-caret-down'
            onClick={toggleWorkoutsActive}
          ></i>
        )}
      </div>
      {workoutsActive && (
        <div className='table-container'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{selected_language.number}</TableHead>
                <TableHead>{selected_language.date}</TableHead>
                <TableHead>{selected_language.type}</TableHead>
                <TableHead>{selected_language.place}</TableHead>
                <TableHead>{selected_language.time}</TableHead>
                <TableHead>{selected_language.distance}</TableHead>
                <TableHead>
                  {selected_language.additional_information}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workouts.map((workout, count) => (
                <ProfileWorkout
                  key={'w-' + workout.id}
                  workout={workout}
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

export default ProfileWorkouts;
