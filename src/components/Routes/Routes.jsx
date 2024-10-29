import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home.jsx";
import FoodyCategories from "../FoodByCategory/FoodyCategories.jsx";
import Meals from "../Meals/Meals.jsx";
import Cart from "../Cart/Cart.jsx";
import FoodDetail from "../Fooddetail/FoodDetail.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Meals />,
      },
      {
        path: "/:category",
        element: <FoodyCategories />,
        loader: async ({ params }) =>
          await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
          ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/food/:foodId",
        element: <FoodDetail />,
        loader: async ({params})=> await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`)
      },
    ],
  },
]);
