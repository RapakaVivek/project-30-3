// src/App.js
import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
    'Watermelon',
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Search Filter Example</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '20px', padding: '10px', width: '200px' }}
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredItems.map((item, index) => (
          <li key={index} style={{ padding: '5px 0' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
