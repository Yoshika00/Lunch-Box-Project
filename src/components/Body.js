import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./constant";

function filterData(searchText, restaurants) {
    const filterData =  restaurants.filter((restaurant) =>
        restaurant.data.name.includes(searchText)
    );

    return filterData;
}

const Body = () => {
    //let searchTxt = "KFC"
    //const searchVar = useState();
    
    const [searchText, setsearchText] = useState("  ")
    const [restaurants, setRestaurants] = useState([]);

    useEffect(()=>{
        getRestaurants();
    },[searchText])

    

    async function getRestaurants() {
        //const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING`);
        const data = await fetch(`https://www.swiggy.com/mapi/homepage/getCards?lat=21.2513844&lng=81.62964130000002`)
        const json = await data.json();
        console.log(json);
        //setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setRestaurants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }


    console.log("render");

    return (
    <>
      <div className="search-container">
            <input 
            type="text" 
            className="search-input" 
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
                //e.target.value -> whatever you write in input
                setsearchText(e.target.value)}} />
         

         <button className="search-btn"
         onClick = {() => {
         //filter the data
        const data= filterData(searchText, restaurants)
        //change the state
        setRestaurants(data)
        }} > Search</button>
           
      </div>
         
        

         <div className='restaurant-list'>
         {restaurantList.map((restaurant) => {
             return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
         })}
        
         </div>
    </>
    
    )
}

export default Body
