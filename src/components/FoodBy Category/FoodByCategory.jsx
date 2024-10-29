/* eslint-disable react/prop-types */

const FoodByCategory = ({ food }) => {
  const { strMeal, strMealThumb } = food;

  return (
    <div>
      <div className="card bg-base-100  shadow-xl flex flex-col space-y-4 p-4">
        <figure className="rounded-lg">
          <img src={strMealThumb} alt="Shoes" />
        </figure>
        <div className="card-bod space-y-4">
          <h2 className="card-titl flex-grow text-start">
            {strMeal.slice(0, 14)}...
          </h2>

          <div className="card-actions justify-start ">
            <button className="btn bg-orange-600 text-white">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodByCategory;
