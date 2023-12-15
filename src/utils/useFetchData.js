// useFetchData.js
import { useState, useEffect } from "react";

const useFetchData = (api) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const json = await response.json();

        if (json) {
          const processedData = checkJsonData(json);
          setData(processedData);
          setLoading(false);
          console.log(json);
        } else {
          console.log("No data fetched from API");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

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
