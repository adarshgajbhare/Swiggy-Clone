import { CARD_IMG } from "../utils/constants";
const RestaurantMenuItems = ({ item }) => {
  
  return (
    <div className="">
      {item.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2   border-gray-400  text-left flex justify-between">

          <div className="w-1/2 ">

            <div className="p-2">
              <span className="font-bold">{item.card.info.name}</span>
              <p className="font-bold mt-1 text-black opacity-70" >₹ {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}{" "}
              </p>
              <p className="text-base mt-2 text-black opacity-70 w-80">{item.card.info.description}</p>
            </div>


          </div>
          <div className="container-ib p-4 w-3/12 relative"> 
          <img className=" container-i w-full relative h-32 rounded-lg" src={CARD_IMG + item.card.info.imageId} />
            <div className="container-btn">
              <button class="w-20 h-8 absolute bottom-1 ml-2 left-24 transform -translate-x-1/2 bg-green-500 text-white border-none cursor-pointer m-0 p-1rem outline-none rounded-md font-bold text-xs shadow-md transition duration-200 ease-out hover:shadow-lg hover:text-green-500 hover:bg-white">
                ADD
              </button>{" "}
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuItems;
