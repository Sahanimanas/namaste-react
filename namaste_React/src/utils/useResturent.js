import { useState, useEffect } from "react"

const useResaurent = (id) =>{
    const [restaurant,setRestaurent] = useState(null);

    useEffect(()=>{
        getRestaurentMenu();
    },[]);

    // if(!restaurantMenu) 
    //     return null;

    async function getRestaurentMenu(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5439106&lng=77.3331085&restaurantId=${id}`)
        const json = await data.json();
        setRestaurent(json.data)
        // console.log(Object.values(json.data?.menu?.items));
        
    }

    return restaurant;
}

export default useResaurent;