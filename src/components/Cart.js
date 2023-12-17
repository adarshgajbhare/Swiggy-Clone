import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuItems from "./RestaurantMenuItems";
import { clearCart, removeItem } from "../store/cartSlice";
const Cart = () => {
  const CartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold text-black">cart</h1>
      <button
        className=" rounded-md bg-yellow-500  p-2 text-white m-2  "
        onClick={handleClearCart}
      > 
        clear
      </button>
      <div className="w-6/12 m-auto">
        {CartItem.length === 0 ? (
          <h1 className="text-black">Cart is empty</h1>
        ) : (
          <RestaurantMenuItems items={CartItem} />
        )}
      </div>
    </div>
  );
};

export default Cart;
