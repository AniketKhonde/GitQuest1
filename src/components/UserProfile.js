// UserProfile.js
import React from 'react';

function UserProfile({ userData }) {
  return (
    <div className='userProfile'>
      <h2 className='heading-userpro'>User Profile</h2>
      <img src={userData.avatar_url} alt="Profile" className='image_profile'/>
      <p className='username'>{userData.login}</p>
      {/* Add other profile information */}
    </div>
  );
}

export default UserProfile;