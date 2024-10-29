/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FoodByCategory = ({ food , handleAddToCart}) => {
  const { strMeal, strMealThumb , idMeal} = food;
//   console.log(food);
  return (
    <div>
      <div className="card bg-base-100  shadow-xl flex flex-col space-y-4 p-4">
        <figure className="rounded-lg">
          <img src={strMealThumb} alt="Shoes" />
        </figure>
        <div className="card-bod space-y-4">
          <h2 className="card-titl flex-grow text-start">
            {strMeal.slice(0, 14)}...
          </h2>

          <div className="card-actions justify-between items-center ">
            <Link to={`/food/${idMeal}`} className="underline text-xl font-semibold ">See Detail</Link>
            <button  onClick={()=>handleAddToCart(food)} className="btn bg-orange-600 text-white">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodByCategory;
