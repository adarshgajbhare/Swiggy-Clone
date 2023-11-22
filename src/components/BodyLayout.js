import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { API_KEY } from "../utils/constants";
import Search from "./searchbar";
// import resData from "../utils/mockData";

const BodyLayout = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const checkJsonData = (jsonData) => {
    const allRestaurantsData = [];

    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      const restaurantsData =
        jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurantsData !== undefined) {
        allRestaurantsData.push(restaurantsData);
      }
    }
    return allRestaurantsData;
  };

  const fetchData = async () => {
    try {
      const data = await fetch(API_KEY);
      const json = await data.json();
      console.log(json);
      if (json) {
        const APIFetchedData = await checkJsonData(json);
        setListOfRestaurant(APIFetchedData.flat()); // flatten the array of arrays
        console.log("data fetched successfully!!!!!");
      } else {
        console.log("No data fetched from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="body">
      <div className="container">
        <h1>Top restaurants near you </h1>
        <Search
          listOfRestaurant={listOfRestaurant}
          resData={listOfRestaurant}
          setListOfRestaurant={setListOfRestaurant}
        />
      </div>

      <div className="res-container">
        {listOfRestaurant &&
          listOfRestaurant.map((restaurants) => (
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
