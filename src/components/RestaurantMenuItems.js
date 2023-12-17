import { useDispatch } from "react-redux";
import { CARD_IMG } from "../utils/constants";
import { addItem, removeItem } from "../store/cartSlice";
import { useState } from "react";

const RestaurantMenuItems = ({ items }) => {
  const [btnTransform, setBtnTransform] = useState(true);
  const [itemCount, setItemCount] = useState(0);
  const dispatch = useDispatch();

  const handleAddItem = (menuItem) => {
    dispatch(addItem(menuItem));
    setBtnTransform(false);
    setItemCount(itemCount + 1);
  };

  const handleMinusItem = (menuItem) => {
    setItemCount(itemCount - 1);
    dispatch(removeItem(menuItem));
  };
  return (
    <div className="">
      {items &&
        items.map((menuItem) => (
          <div
            key={menuItem.card && menuItem.card.info.id}
            className="p-2 m-2 border-b-2   border-gray-400  text-left flex justify-between"
          >
            <div className="w-1/2 ">
              <div className="p-2">
                <span className="font-bold">{menuItem.card.info.name}</span>
                <p className="font-bold mt-1 text-black opacity-70">
                  ₹{" "}
                  {menuItem.card.info.price
                    ? menuItem.card.info.price / 100
                    : menuItem.card.info.defaultPrice / 100}{" "}
                </p>
                <p className="text-base mt-2 text-black opacity-70 w-80">
                  {menuItem.card.info.description}
                </p>
              </div>
            </div>
            <div className="container-ib p-4 w-3/12 relative">
              <img
                className="container-i w-full relative h-32 rounded-lg"
                src={CARD_IMG + menuItem.card.info.imageId}
              />
              <div className="container-btn">
                {btnTransform ? (
                  <button
                    className="w-20 h-8 absolute bottom-1 ml-2 left-24 transform -translate-x-1/2 bg-green-500 text-white border-none cursor-pointer m-0 p-1rem outline-none rounded-md font-bold text-xs shadow-md transition duration-200 ease-out hover:shadow-lg hover:text-green-500 hover:bg-white"
                    onClick={() => handleAddItem(menuItem)}
                  >
                    ADD
                  </button>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      disabled={itemCount === 0}
                      onClick={handleMinusItem}
                      className="w-20 h-8 bg-green-500 text-white border-none cursor-pointer outline-none rounded-md font-bold text-xs shadow-md transition duration-200 ease-out hover:shadow-lg hover:text-green-500 hover:bg-white"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={itemCount}
                      className="border-2 w-20 text-center"
                    />
                    <button
                      onClick={() => handleAddItem(menuItem)}
                      className="w-20 h-8 bg-green-500 text-white border-none cursor-pointer outline-none rounded-md font-bold text-xs shadow-md transition duration-200 ease-out hover:shadow-lg hover:text-green-500 hover:bg-white"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RestaurantMenuItems;
