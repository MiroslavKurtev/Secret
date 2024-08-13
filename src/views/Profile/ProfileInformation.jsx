import React from 'react';
import ProfileInformationItem from './ProfileInformationItem';

const ProfileInformation = ({ profileData }) => {
  const profile = profileData;
  delete profile['id'];

  return (
    <div className='information-container'>
      {Object.entries(profile).map(([key, value]) => (
        <ProfileInformationItem key={key} label={key} value={value} />
      ))}
    </div>
  );
};

export default ProfileInformation;
