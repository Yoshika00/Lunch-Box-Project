import React, { createElement } from 'react';
import ReactDOM  from 'react-dom/client'; 
import Header from './Header';
import { IMG_CDN } from './constant';
import { restaurantList } from './constant';
import RestaurantCard from './RestaurantCard';
import Body from './Body';

/*
Header
   Logo
   Nav Items (right side)
   Cart

Body
   SearchBox
   RestaurantList
      ReastaurantCart
         -Image
         -Name
         -Rating
         -Cuisines
Footer
    Links
    Copy Right
*/ 


/*const Kfc = {
    name: "KFC",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
    cuisines: ["Burgers", "American"],
    ratings: "4.5"
} */

 
  
  const Title = () => {
    return(
    <a href="/"> <img className="logo" alt="logo" src= {logo} /> </a>
    )
  };
  
  const NavComponent = () => {
    return (
      <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
    );
  }
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <NavComponent />
      </div>
    );
  };



/*const RestaurantCard = (props) => {
    return (
        <div className='card'>
            <img src={Kfc.image}/>
            <h2>{Kfc.name}</h2>
            <h3>{Kfc.cuisines.join(",")}</h3>
            <h4>{Kfc.ratings} stars</h4>
        </div>
    )
} */



/*const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
}*/



const Footer = () => {
    return (
        <div className='footer'>
             <h4>footer</h4>
        </div>
    )
}

const AppLayout = () => {
    return  (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
};

/*const BorderObj = {
    border: "3px solid green",
}

const Jsx1 = () => {

    return (
        <div style={{
            color:"lightpink",
            fontSize: "3rem",
        }
         }>
        <h1>hello</h1>
        <h1>deeps</h1>
        </div>
    )
}*/

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)

