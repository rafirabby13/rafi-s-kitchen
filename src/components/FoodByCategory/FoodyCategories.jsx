import { useLoaderData } from "react-router-dom";
import FoodByCategory from "../FoodBy Category/FoodByCategory.jsx";

const FoodyCategories = () => {
  const food = useLoaderData();
  // const {meals} = food
//   console.log(food.meals);
  const foods = food.meals;
  return (
    <div className="col-span-1 lg:col-span-2 xl:col-span-3">
      {/* <h1>food by category</h1> */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {foods.map((food) => (
          <FoodByCategory key={food.idMeal} food={food}></FoodByCategory>
        ))}
      </div>
    </div>
  );
};

export default FoodyCategories;
