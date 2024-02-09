// UserStats.js
import React from 'react';

function UserStats({ userData }) {
  return (
    <div className='userStats'>
      <h2 className='heading_userstats'>User Stats</h2>
      <div className='userdata'>
      <p className='followers'>Followers: {userData.followers}</p>
      <p className='following'>Following: {userData.following}</p>
      <p className='repos'>Public Repositories: {userData.public_repos}</p>
      </div>
      {/* Add other user statistics */}
    </div>
  );
}

export default UserStats;