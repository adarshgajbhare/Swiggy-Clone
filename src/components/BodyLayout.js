import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Search from "./searchbar";
import Shimmer from "./Shimmer";
import { useOutlet, useOutletContext, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const BodyLayout = () => {
  const api = useOutletContext();

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prevApi, setPrevApi] = useState(null);

  useEffect(() => {
    if (prevApi !== api) {
      setPrevApi(api);
      setLoading(true); // Set loading to true when the API changes
      fetchData();
    }
  }, [api, prevApi]);

  const checkJsonData = (jsonData) => {
    const allRestaurantsData = [];

    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      const restaurantsData =
        jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurantsData !== undefined) {
        restaurantsData.forEach((restaurant) => {
          const id = restaurant?.info?.id;

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

        setListOfRestaurant(APIFetchedData.flat());
        setFilteredListOfRestaurant(APIFetchedData.flat());
        setLoading(false); // Set loading to false after data is fetched
        console.log("data fetched successfully!!!!!");
      } else {
        console.log("No data fetched from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return loading ? (
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
            <Link key={restaurants?.info?.id} to={"/menu/"+ restaurants?.info?.id} >
              {" "}
              <RestaurantCard resData={restaurants?.info} />{" "}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BodyLayout;
