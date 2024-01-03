import { useEffect, useState } from "react";
import { RES_MENU_API } from "../utils/constants";

const useRestaurantMenus = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const data = await fetch(`${RES_MENU_API}/${resId}`);
    const json = await data.json();
    setResMenu(json.data);
  };
  
  return resMenu;
};

export default useRestaurantMenus;
