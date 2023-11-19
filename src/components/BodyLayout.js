import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
// import resData from "../utils/mockData";

const BodyLayout = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const topRatedRestaurants = () => {
    const filterList = resData.filter((resData) => resData.data.avgRating > 4);
    setListOfRestaurant(filterList);
    console.log("clicked");
  };

  const lowRatedRestaurants = () => {
    const filterList = resData.filter( 
      (resData) => resData.data.avgRating < 3.5
    );
    setListOfRestaurant(filterList);
    console.log("clicked");
  };

  const allRatedRestaurants = () => {
    setListOfRestaurant(resData);
  };


  useEffect ( ()=> {fetchData(); }, []) ;  

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
    
    const jsonData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      console.log(jsonData)
      setListOfRestaurant(jsonData);
      console.log("data fetched successfully!!!!!")
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
     onClick={topRatedRestaurants} 
        >
          Top Rated Restaurants
        </button>
        <button className="filter-btn" 
        onClick={lowRatedRestaurants}
        >
          Low Rated Restaurants
        </button>
        <button className="filter-btn" 
       onClick={allRatedRestaurants}
        >
          All Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant &&  listOfRestaurant.map((restaurants) => (
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
