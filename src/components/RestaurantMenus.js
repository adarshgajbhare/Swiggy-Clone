import React, { useEffect, useState } from "react";
import { HYDERABAD_RES_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantMenus = () => {
  const [resMenu, setResMenu] = useState(null);

  const {resId} = useParams();
  console.log(resId)

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu  = async () => {
    const data = await fetch(`${HYDERABAD_RES_MENU_API}/${resId}`);
    const json = await data.json();
   
    setResMenu(json?.data);
    console.log(json);
  };

  if (resMenu === null) return <Shimmer />;

 const { name, cuisines , avgRating , sla , city } = resMenu?.cards?.[0]?.card?.card?.info;

  return (
    <div>
      <h1> {name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{sla?.lastMileTravelString} </h3>
      <h3>{avgRating} </h3>
      <h3>{city} </h3>
     
    </div>
  );
};
export default RestaurantMenus;
