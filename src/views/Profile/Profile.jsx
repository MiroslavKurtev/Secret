import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-information'>
        <div className='img-container'>
          <img src={process.env.PUBLIC_URL + 'default_profile.jpg'} alt='' />
        </div>
        <div className='information-container'>
          <div></div>
        </div>
      </div>
      <div className='profile-stats'>
        <div className='profile-trainings'>Trainings</div>
        <div className='profile-competitions'>Competitions</div>
      </div>
    </div>
  );
};

export default Profile;
