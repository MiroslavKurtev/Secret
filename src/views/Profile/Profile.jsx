import React from 'react';
import './Profile.css';
import profile from './dummyData_profile.js';
import ProfileInformation from './ProfileInformation.jsx';
import ProfileWorkouts from './ProfileWorkouts.jsx';
import Competitions from './Competitions/Competitions.jsx';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-information">
        <div className="img-container">
          <img
            src={process.env.REACT_APP_PUBLIC_URL + 'default_profile.jpg'}
            alt=""
          />
        </div>
        <ProfileInformation profileData={profile} />
      </div>
      <ProfileWorkouts />
      <Competitions />
    </div>
  );
};

export default Profile;
