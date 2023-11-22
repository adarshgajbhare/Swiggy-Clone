import React, { useState } from "react";

const Search = ({ resData, setListOfRestaurant }) => {
  console.log(resData);

  const [searchText, setSearchText] = useState("");

  const searchFilter = () => {
    const searchFilterList = resData.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    console.log(searchFilterList);
    setListOfRestaurant(searchFilterList);
  };

  const topRated = () => {
    const topRatedList = resData.filter((restaurant) => {
      return restaurant.info.avgRating >= 4.5;
    });
    console.log("top rated" + topRatedList);

    setListOfRestaurant(topRatedList);
  };

  const lowRated = () => {
    const lowRatedList = resData.filter((restaurant) => {
      return restaurant.info.avgRating < 4;
    });
    console.log("low rated" + lowRatedList);
    setListOfRestaurant(lowRatedList);
  };
  
  return (
    <div className="container search">
      <div className="subscribe rate-btn">
        <button className="btn" onClick={topRated}>
          <i className="fa-solid fa-bolt icon"></i>
          <i className="fa-regular fa-circle-check icon2"></i>
          <a href="#" className="btn-text">
            Top Restaurant
          </a>
        </button>
      </div>
      <div className="subscribe rate-btn">
        <button className="btn" onClick={lowRated}>
          <i className="fa-solid fa-bolt icon"></i>
          <i className="fa-regular fa-circle-check icon2"></i>
          <a href="#" className="btn-text">
            Low Restaurant
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
