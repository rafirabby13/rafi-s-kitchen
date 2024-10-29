/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FoodByCategory = ({ food, handleAddToCart }) => {
  const { strMeal, strMealThumb, idMeal } = food;
  //   console.log(food);
  return (
    <div className="car bg-base-100  shadow-xl  space-y-4 p-4 flex flex-col justify-between">
      <figure className="rounded-lg">
        <img className="rounded-lg" src={strMealThumb} alt="Shoes" />
      </figure>
      <div className="card-bod space-y-4">
        <h2 className="card-titl text-start">{strMeal}</h2>

        <div className="card-actio">
          <div>
            <Link
              to={`/food/${idMeal}`}
              className="underline lg:text-xl font-semibold "
            >
              See Detail
            </Link>
          </div>
          <div className="">
            <button
              onClick={() => handleAddToCart(food)}
              className="btn bg-orange-600 text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodByCategory;
