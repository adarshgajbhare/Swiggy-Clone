// BodyLayout.js
import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link ,useOutletContext } from "react-router-dom";
import Search from "./searchbar";
import Shimmer from "./Shimmer";
import useFetchData from "../utils/useFetchData";
import { useState , useEffect } from "react";
const BodyLayout = () => {
  const api = useOutletContext();
  const { data, loading } = useFetchData(api);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  useEffect(() => {
    setFilteredListOfRestaurant(data);
  }, [data]);

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="container">
        <h1>Top restaurants near you </h1>
        <Search
          filteredListOfRestaurant={filteredListOfRestaurant}
          resData={data}
          setFilteredListOfRestaurant={setFilteredListOfRestaurant}
        />
      </div>

      <div className="res-container">
        {filteredListOfRestaurant &&
          filteredListOfRestaurant.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={`/menu/${restaurant?.info?.id}`}>
              <RestaurantCard resData={restaurant?.info} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BodyLayout;
