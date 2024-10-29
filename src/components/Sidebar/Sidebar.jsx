/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import MealsCategory from "../MealsCategory/MealsCategory.jsx";

const Sidebar = ({categories}) => {
    
    return (
        <div className="col-span-1 border-t-orange-700 hidden lg:flex
        flex-col">
            {/* <h2>side bar</h2> */}
           <div className="grid gap-3">
           {
                categories.map((category, index)=> <MealsCategory 
                key={index}
                category={category}
                ></MealsCategory>)
            }
           </div>
        </div>
    );
};

export default Sidebar;