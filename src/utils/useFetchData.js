// useFetchData.js
import { useState, useEffect } from "react";
import { getCityAPI } from "./constants";

const useFetchData = (lat, lng) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = getCityAPI(lat, lng);

    const fetchData = async () => {
      try {
        // Attempt to fetch data from the API
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("API request failed");
        }

        const json = await response.json();
        if (json && json.data) {
          const processedData = checkJsonData(json);
          setData(processedData);
        } else {
          throw new Error("API returned no data");
        }
      } catch (error) {
        console.error("Error fetching data from API:", error);
        // If there's an error, attempt to fetch data from the local file
        try {
          const localResponse = await fetch('/v5.json'); // Adjust the path if necessary
          if (!localResponse.ok) {
            throw new Error("Local file request failed");
          }
          const localJson = await localResponse.json();
          if (localJson && localJson.data) {
            const processedLocalData = checkJsonData(localJson);
            setData(processedLocalData);
          } else {
            throw new Error("Local file returned no data");
          }
        } catch (localError) {
          console.error("Error fetching data from local file:", localError);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lat, lng]);

  const checkJsonData = (jsonData) => {
    const allRestaurantsData = [];

    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      const restaurantsData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (restaurantsData !== undefined) {
        restaurantsData.forEach((restaurant) => {
          const id = restaurant?.info?.id;
          if (id && !allRestaurantsData.some((item) => item.info.id === id)) {
            allRestaurantsData.push(restaurant);
          }
        });
      }
    }

    return allRestaurantsData.flat();
  };

  return { data, loading };
};

export default useFetchData;
