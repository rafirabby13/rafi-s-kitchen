/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const MealsCategory = ({category}) => {
    const {strCategory} = category
    return (
        <div className="border-2 p-4 bg-green-100 rounded-lg font-bold text-xl text-[#131313b6] hover:bg-green-200 cursor-pointer" >
            <Link to={`/${strCategory}`}><h1>{strCategory}</h1></Link>
        </div>
    );
};

export default MealsCategory;