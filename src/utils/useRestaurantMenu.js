import { useEffect, useState } from "react"
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {

    useEffect(() => {
        fetchData();
    },[]) 

    const [resInfo, setResInfo] = useState(null)

    fetchData = async() => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json.data)
    }

    return resInfo;
}

export default useRestaurantMenu;