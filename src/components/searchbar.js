import React, { useState } from "react";

const Search = ({ resData, setFilteredListOfRestaurant }) => {
  console.log(resData);

  const [searchText, setSearchText] = useState("");

  const searchFilter = () => {
    const searchFilterList =  resData.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase() )
    );

    console.log(searchFilterList);
    if(searchFilter.length === 0){

      
    }
    setFilteredListOfRestaurant(searchFilterList);
  };

  const topRated = () => {
    const topRatedList = resData.filter((restaurant) => {
      return restaurant.info.avgRating >= 4.5;
    });
    console.log("top rated" + topRatedList);

    setFilteredListOfRestaurant(topRatedList);
  };

  const lowRated = () => {
    const lowRatedList = resData.filter((restaurant) => {
      return restaurant.info.avgRating < 4;
    });
    console.log("low rated" + lowRatedList);
    setFilteredListOfRestaurant(lowRatedList);
  };
  
  return (
    <div className="container search">
      <div className="subscribe rate-btn">
        <button className="btn" onClick={topRated}>
          <a href="#" className="btn-text">
            Top Rated
          </a>
        </button>
      </div>
      <div className="subscribe rate-btn">
        <button className="btn" onClick={lowRated}>
          <a href="#" className="btn-text">
            Low Rated
          </a>
        </button>
      </div>
      <div className="subscribe" tabIndex="0">
        <input
          type="text"
          id="text"
          placeholder="Find your favorite dish..."
          className="input"
          tabIndex="0"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="btn" onClick={searchFilter}>
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
