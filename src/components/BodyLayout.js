import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resData from "../utils/mockData";

const BodyLayout = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resData);

  const topRatedRestaurants = () => {
    const filterList = resData.filter((resData) => resData.data.avgRating > 4);
    setListOfRestaurant(filterList);
    console.log("clicked");
  };

  const lowRatedRestaurants = () => {
    const filterList = resData.filter( 
      (resData ) =>  resData.data.avgRating < 3.5
    );
    setListOfRestaurant(filterList);
    console.log("clicked");
  };

  const allRatedRestaurants = () => {
    setListOfRestaurant(resData);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={topRatedRestaurants}>
          Top Rated Restaurants
        </button>
        <button className="filter-btn" onClick={lowRatedRestaurants}>
          Low Rated Restaurants
        </button>
        <button className="filter-btn" onClick={allRatedRestaurants}>
          All Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((listOfRestaurant) => (
          <RestaurantCard
            key={listOfRestaurant.data.id}
            resData={listOfRestaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyLayout;
