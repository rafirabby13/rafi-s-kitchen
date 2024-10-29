import { createBrowserRouter } from "react-router-dom"
import Home from "../Home/Home.jsx"
import FoodyCategories from "../FoodByCategory/FoodyCategories.jsx"
import Meals from "../Meals/Meals.jsx"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            
            {
                path: '/',
                element:  <Meals/>
            },
            {
                path: '/:category',
                element: <FoodyCategories/>,
                loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`)
            }
            
        ]
    }
])