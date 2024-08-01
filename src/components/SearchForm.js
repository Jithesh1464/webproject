// src/components/SearchForm.js
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [rank, setRank] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(rank);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Rank :
        <input
          type="number"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          required
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
