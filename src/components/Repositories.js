// Repositories.js
import React, { useState, useEffect } from 'react';

const Repositories = ({ username }) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (response.ok) {
          const data = await response.json();
          setRepositories(data);
        } else {
          console.error('Failed to fetch repositories');
        }
      } catch (error) {
        console.error('An error occurred while fetching repositories', error);
      }
    };

    fetchRepositories();
  }, [username]);

  return (
    <div className="repositories">
      <h2 className='heading_repo'>Repositories</h2>
      <ul className="repositories-list">
        {repositories.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repositories;
