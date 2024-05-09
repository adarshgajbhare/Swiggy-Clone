// useFetchData.js
import { useState, useEffect } from "react";

const useFetchData = (api) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
       console.log("#############",api);
       console.log();
        const response = await  fetch(api);
        console.log("data found here !! ", response.data);
        if(!response){
          return " FUCKKKKK Error fetching API fucked Up";
        }
        const json = await response.json();
              console.log("data found here !! ", json.data);
        if (json) {
          const processedData = checkJsonData(json);
          console.log("data found here processed data", processedData);
          setData(processedData);
          setLoading(false);
        
        } else {
        console.log("something went wrong Adarsh")
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
         // console.log("################## From here",restaurantsData);
      if (restaurantsData !== undefined) {
        restaurantsData.forEach((restaurant) => {
          const id = restaurant?.info?.id;
         // console.log("####Iddddddd ",id);

          if (id && !allRestaurantsData.some((item) => item.info.id === id)) {
            allRestaurantsData.push(restaurant);
            //console.log("####ADDDDDDDDDDDDDDDD ",allRestaurantsData);
          }
        });
      }
    }

    return allRestaurantsData.flat();
  };

  return { data, loading };
};

export default useFetchData;
