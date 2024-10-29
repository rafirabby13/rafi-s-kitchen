/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useLoaderData, useOutletContext } from "react-router-dom";
import FoodByCategory from "../FoodBy Category/FoodByCategory.jsx";
import { RotatingTriangles } from "react-loader-spinner";
import { useState } from "react";

const FoodyCategories = () => {
//   const [isLoding, setIsLoading] = useState(true);

  const food = useLoaderData();
  const foods = food.meals;
//   setIsLoading(false)
  const {handleAddToCart} = useOutletContext()
  
  return (
    <div className="col-span-1 lg:col-span-2 xl:col-span-3">
      
        <div >
          {/* <h1>food by category</h1> */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {foods.map((food) => (
              <FoodByCategory key={food.idMeal} food={food}
              handleAddToCart={handleAddToCart}></FoodByCategory>
            ))}
          </div>
        </div>
    
    </div>
  );
};

export default FoodyCategories;
