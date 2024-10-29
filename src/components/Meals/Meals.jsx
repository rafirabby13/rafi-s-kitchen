import { useEffect, useState } from "react";
import Meal from "../Meal/Meal.jsx";

const Meals = () => {
    const [meals, setMeals] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=> res.json())
        .then(data=>{
            // console.log(data.categories);
            setMeals(data.categories)
        })
    },[])
    return (
        <div className="min-h-screen ol-span-1 lg:col-span-2 xl:col-span-3 ">
            <div className=" grid grid-cols-2 lg:grid-cols-3   gap-5">
            {
                meals.map((meal, index)=> <Meal
                key={index}
                meal={meal}
                ></Meal>)
            }
            </div>
            
        </div>
    );
};

export default Meals;