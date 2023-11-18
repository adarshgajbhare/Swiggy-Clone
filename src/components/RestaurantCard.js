import { CARD_IMG } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, maxDeliveryTime, cloudinaryImageId } =
    resData?.data;
  return (
    <div className="res-container">
      <div className="card">
        <div className="card-img">
          <img src={CARD_IMG + cloudinaryImageId} alt="" />
        </div>
        <div className="card-details">
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}⭐</h4>
          <h4>Delivery In {maxDeliveryTime} Minutes </h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
