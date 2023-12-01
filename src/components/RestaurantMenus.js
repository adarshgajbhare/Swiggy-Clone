import React, { useEffect, useState } from "react";
import { HYDERABAD_RES_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CARD_IMG } from "../utils/constants";
const RestaurantMenus = () => {
  const [resMenu, setResMenu] = useState(null);
  const [isExpanded, setExpanded] = useState(false);
  const [buttonText, setButtonText] = useState('ADD');

  const btnChange = () => {
    setButtonText('DONE');
  };
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

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    city,
    totalRatingsString,
  } = resMenu?.cards?.[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };
 
  return (
    <div className="menu-parent">
    <div className="res-menu-container">
      <div className="hotel-container">
        <div className="info-rating">
          <div className="hotel-info">
            <p className="hotel-name"> {name}</p>
            <p className="hotel-cuisines">{cuisines.join(", ")}</p>
            <p className="hotel-city">{city}</p>{" "}
          </div>

          <div className="rating-box">
            <div className="rating">
              <span>
                <svg
                  className="svg-star"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                </svg>
              </span>

              <span className="hotel-rating"> {avgRating}</span>
            </div>
            <div className="rating-count">
              <span className="hotel-rating-count">
                {" "}
                {totalRatingsString || "1K+ ratings"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="styles_divider__2JelH"></div>

      <div className="time-cost">
        <svg
          className="RestaurantTimeCost_icon__8UdT4"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <circle
            r="8.35"
            transform="matrix(-1 0 0 1 9 9)"
            stroke="#3E4152"
            strokeWidth="1.3"
          ></circle>
          <path
            d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
            fill="#3E4152"
          ></path>
        </svg>{" "}
        <span className="text-tc">25 MIN</span>
        <svg
          className="money"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <circle
            cx="9"
            cy="9"
            r="8.25"
            stroke="#3E4152"
            strokeWidth="1.5"
          ></circle>
          <path
            d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
            fill="#3E4152"
          ></path>
        </svg>
        <span className="text-tc tx1">{costForTwoMessage}</span>
      </div>
      <div className="dropdown-header" onClick={handleToggle}>
        <div className="rec-heading" >
          <h2>Recommended</h2>{" "}
        </div>
        <div className="down-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      

      {isExpanded && (
        <div className="recommended-menu">
          <div className="styles_divider__2JelH"></div>
          <ul>
            {itemCards.map((item) => (
              <li key={item.card.info.id}>
                <div className="menu-all">
                  <div className="menu-d">
                    <p className="res-name">{item.card.info.name}</p>
                    <p className="res-price">
                      ₹
                      {item.card.info.defaultPrice / 100 ||
                        item.card.info.price / 100}{" "}
                    </p>
                    <p className="res-des"> {item.card.info.description}</p>
                  </div>
                  <div className="food-img">
                    <img
                      className="menu-item-img"
                      src={CARD_IMG + item.card.info.imageId}
                    />
                  
                    <button className="add-btn"onClick={btnChange}>{buttonText}</button>
                  </div>
                  
                </div>
             
              </li>
            ))}
          </ul>
        </div>
      )}
    </div> 
    </div>
  );
};
export default RestaurantMenus;
