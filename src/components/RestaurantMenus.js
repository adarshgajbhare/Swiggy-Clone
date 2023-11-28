import React, { useEffect, useState } from "react";
import { HYDERABAD_RES_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CARD_IMG } from "../utils/constants";
const RestaurantMenus = () => {
  const [resMenu, setResMenu] = useState(null);
  const [isExpanded, setExpanded] = useState(false);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const data = await fetch(`${HYDERABAD_RES_MENU_API}/${resId}`);
    const json = await data.json();

    setResMenu(json?.data);
    console.log(json);
  };

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, avgRating, sla, city, } =
    resMenu?.cards?.[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;


      
      const handleToggle = () => {
        setExpanded(!isExpanded);
      };

  return (
    
    <div className="res-menu-container">
      
      <div className="hotel-container">
        <div className="hotel-info">
          <h1 className="hotel-name"> {name}</h1>
          <p className="hotel-cuisines">{cuisines.join(", ")}</p>
          <p className="hotel-city">{city} , </p>{" "}
          <p className="distance">{sla?.lastMileTravelString} </p>
          <p className="rating other">
            <span className="star-icon-container">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                role="img"
                aria-hidden="true"
                strokecolor="rgba(2, 6, 12, 0.92)"
                fillcolor="rgba(2, 6, 12, 0.92)"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9"
                  fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                ></circle>
                <path
                  d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="StoreRating20_svg__paint0_linear_32982_71567"
                    x1="10"
                    y1="1"
                    x2="10"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#21973B"></stop>
                    <stop offset="1" stopColor="#128540"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            <span className="hotel-rating"> {avgRating}</span>
          </p>
          
        </div>
      </div>
      <div class="styles_divider__2JelH"></div>
      <div className="dropdown-header" onClick={handleToggle}>
        <span className="icon">^</span>
        Recommendation
      </div>
      {/* <div class="styles_divider__2JelH"></div> */}
      {isExpanded && (
      <div className="recommended-menu">
        <div class="styles_divider__2JelH"></div>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {" "}
              <p className="rec-name">{item.card.info.name}</p>
              <p>
                {" "}
                ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}{" "}
              </p>
              <div className="food-img">
                <img
                  className="menu-item-img"
                  src={CARD_IMG + item.card.info.imageId}
                />
              </div>
              <p> {item.card.info.description}</p>
              <div class="styles_divider__2JelH"></div>
            </li>
          ))}
        </ul>
      </div>
       )}
    </div>
  );
};
export default RestaurantMenus;
