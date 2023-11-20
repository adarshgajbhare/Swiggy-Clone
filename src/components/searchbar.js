import React from 'react';
 
const Search = () => {
  return (
    <div className="container search">
      <div className="subscribe" tabIndex="0">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Find your favourite dish..."
          className="input"
          tabIndex="0"
        />
        <button className="btn">
          <i className="fa-solid fa-bolt icon"></i>
          <i className="fa-regular fa-circle-check icon2"></i>
          <a href="#" className="btn-text">
            Search
          </a>
        </button>
      </div>
    </div>
  );
};

export default Search;
