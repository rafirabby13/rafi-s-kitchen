import { Link, useLoaderData } from "react-router-dom";

const FoodDetail = () => {
    const selectedFoodDetail = useLoaderData()
    // console.log(selectedFoodDetail.meals[0]);
    const {strArea, strCategory,strInstructions,strMeal ,strMealThumb,strTags,strYoutube} = selectedFoodDetail.meals[0];
    return (
        <div className="col-span-3">
            <div className="lg:w-9/12 mx-auto lg:text-2xl font-semibold lg:space-y-5 border-2 p-2 lg:p-5 rounded-lg">
                <img className="w-full h-40 lg:h-80 rounded-lg" src={strMealThumb} alt="" />
                <div className="lg:flex items-center justify-between ">
                    <p>{strCategory}</p>
                    <p>{strTags}</p>
                </div>
                <div className="lg:flex items-center justify-between ">
                    <p>{strArea}</p>
                    <p>{strMeal}</p>
                </div>
                <p className="font-normal"><span className="font-bold lg:text-3xl">Instuctions:</span> {strInstructions.length > 300?
                strInstructions.slice(0,300)
                :
                strInstructions
            }</p>
                <p>Youtube Link: <a target="_blank" href={strYoutube}>{strYoutube}</a></p>
                <Link to={`/${strCategory}`} className="btn font-bold">Go Back...</Link>
            </div>
        </div>
    );
};

export default FoodDetail;