import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Search from "./searchbar";
import Shimmer from "./Shimmer";
import { MUMBAI_API } from "../utils/constants";
const BodyLayout = ({ api }) => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] =useState ([]);

  useEffect(() => {
    fetchData();
  }, [api]);

  const checkJsonData = (jsonData) => {
    const allRestaurantsData = [];
  
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      const restaurantsData =
        jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
  
      if (restaurantsData !== undefined) {
        restaurantsData.forEach((restaurant) => {
          const id = restaurant?.info?.id;
  
          // Check if the ID is not already in the array before pushing
          if (id && !allRestaurantsData.some((item) => item.info.id === id)) {
            allRestaurantsData.push(restaurant);
          }
        });
      }
    }
  
    return allRestaurantsData;
  };
  

  const fetchData = async () => {
    try {
      const data = await fetch(api);

      const json = await data.json();

      console.log(json);
      
      if (json) {
        const APIFetchedData = await checkJsonData(json);
        
        setListOfRestaurant(APIFetchedData.flat()); // flatten the array of arrays\

        setFilteredListOfRestaurant(APIFetchedData.flat());

        console.log("data fetched successfully!!!!!");

      } else {
        console.log("No data fetched from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // conditional Rendering other way shown below with ternary opertaor
  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="container">
        <h1>Top restaurants near you </h1>
        <Search
          filteredListOfRestaurant={filteredListOfRestaurant}
          resData={listOfRestaurant}
          setFilteredListOfRestaurant={setFilteredListOfRestaurant}
        />
      </div>

      <div className="res-container">
        {filteredListOfRestaurant &&
          filteredListOfRestaurant.map((restaurants) => (
            <RestaurantCard
              key={restaurants?.info?.id}
              resData={restaurants?.info}
            />
          ))}
      </div>
    </div>
  );
};

export default BodyLayout;
