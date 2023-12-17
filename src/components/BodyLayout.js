import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link, useOutletContext } from "react-router-dom";
import Search from "./Search";
import Shimmer from "./Shimmer";
import useFetchData from "../utils/useFetchData";
import { useState, useEffect } from "react";
// import { withPromotedLabel } from "./RestaurantCard";
const BodyLayout = () => {
  const api = useOutletContext();
  const { data, loading } = useFetchData(api);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);


  console.log(api)
 
//  const PromotedRestaurantCard =  withPromotedLabel(RestaurantCard)

  useEffect(() => {
    setFilteredListOfRestaurant(data);
  }, [data]);

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <p className="text-2xl font-bold opacity-70 text-black ml-9 flex-none relative top-2">
          Top restaurants near you{" "}
        </p>
        <Search
          filteredListOfRestaurant={filteredListOfRestaurant}
          resData={data}
          setFilteredListOfRestaurant={setFilteredListOfRestaurant}
        />
      </div>
      <div className="body">
        
        <div className="res-container">
          {filteredListOfRestaurant &&
            filteredListOfRestaurant.map((restaurant) => (
              
              <Link
                key={restaurant?.info?.id}
                to={`/menu/${restaurant?.info?.id}`}
              >
                
                {/* {restaurant.info.availability.opened ? <PromotedRestaurantCard resData={restaurant?.info}/> :  <RestaurantCard resData={restaurant?.info} />} */}
                <RestaurantCard resData={restaurant?.info} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BodyLayout;
