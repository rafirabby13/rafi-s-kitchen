import { useEffect, useState } from "react";
import Meal from "../Meal/Meal.jsx";
import { DNA } from "react-loader-spinner";
import { useOutletContext } from "react-router-dom";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoding, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.categories);
        setMeals(data.categories);
        setIsLoading(false);
      });
  }, []);
const handleAddToCart = useOutletContext()
// console.log(handleAddToCart);

  return (
    <div className="min-h-screen col-span-1 lg:col-span-2 xl:col-span-3 ">
      {isLoding ? (
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      ) : (
        <div className="">
          <div className=" grid grid-cols-2 lg:grid-cols-3   gap-5">
            {meals.map((meal, index) => (
              <Meal key={index} meal={meal}
              handleAddToCart={handleAddToCart}
              ></Meal>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Meals;
