import { IMG_CDN } from "./constant";

const RestaurantCard = ({name, cuisines, cloudinaryImageId, avgRating, lastMileTravelString,costForTwoString}) => {
    return (
      <div className="card">
     
        <img src={ IMG_CDN + cloudinaryImageId }/>
        <div className="card-title">{name}</div>
        <div className="card-tags">{cuisines.join(",")}</div>
  
        <div className='card-footer'>
             <div className="card-rating">{avgRating}</div>
             <h4>{lastMileTravelString} </h4>
             <div className='costfortwo'>{costForTwoString} </div>
        </div>
        
      </div>
    );
  };

  export default RestaurantCard