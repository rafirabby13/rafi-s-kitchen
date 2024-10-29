/* eslint-disable react/prop-types */

const Meal = ({ meal }) => {
  const { strCategory , strCategoryThumb} = meal;
  return (
    <div className="">
      <div className="card bg-base-100  shadow-xl flex flex-col space-y-4 p-4">
        <figure className="rounded-lg">
          <img className="" src={strCategoryThumb} alt="Shoes" />
        </figure>
        <div className="card-bod space-y-4">
          <h2 className="card-titl flex-grow text-start">
            {strCategory}...
          </h2>

          <div className="card-actions justify-start">
            <button className="btn bg-violet-700 text-white ">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
