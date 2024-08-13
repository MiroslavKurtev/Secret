import React from 'react';
import './ProfileInformationItem.css';

import bg_Bg from '../../languages/bg_BG.js';
const selected_language = bg_Bg;

const ProfileInformationItem = ({ label, value }) => {
  return (
    <div className='profile-item'>
      <label>{selected_language[label]}:</label> <p>{value}</p>
    </div>
  );
};

export default ProfileInformationItem;
