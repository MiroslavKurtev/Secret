import React from 'react';
import { TableCell, TableRow } from '../../components/Table';
import { formatSeconds } from '../../utils/formating/formatTime.js';

const ProfileWorkout = ({ workout, count }) => {
  return (
    <TableRow>
      {Object.entries(workout).map(([key, value]) =>
        key !== 'id' ? (
          <TableCell key={'w-' + workout.id + key}>
            {key === 'time' || key === 'time_first'
              ? formatSeconds(value)
              : value}
          </TableCell>
        ) : (
          <TableCell key={'w-' + workout.id + key}>{count + 1}</TableCell>
        )
      )}
      <TableCell key={'w-' + workout.id + 'link'}>Link</TableCell>
    </TableRow>
  );
};

export default ProfileWorkout;
