// App.js
import React, { useState } from 'react';
import './App.css'; // Import CSS file
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import UserStats from './components/UserStats';
import Repositories from './components/Repositories';
import Error from './components/Error';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setError(null);
      } else {
        setError('User not found');
      }
    } catch (error) {
      setError('An error occurred while fetching data');
    }
  };

  return (
    <div className="container">
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
        {error && <Error message={error} />}
      </div>
      {userData && (
        <div className="profile-container">
          <div className="profile">
            <UserProfile userData={userData} />
            <UserStats userData={userData} />
            <Repositories username={userData.login} />
          </div>
          {/* <Repositories username={userData.login} /> */}
        </div>
      )}
    </div>
  );
}

export default App;
