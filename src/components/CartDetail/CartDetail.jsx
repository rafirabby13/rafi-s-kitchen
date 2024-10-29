/* eslint-disable react/prop-types */

const CartDetail = ({cartData}) => {
    // console.log(cartData);
    const {strMeal, strMealThumb, idMeal} = cartData;
    return (
        <div className="">
            <div className="border-2 flex items-center gap-4 p-3 rounded-xl">
                <img className="h-24 rounded-xl" src={strMealThumb} alt="" />
                <div className="text-2xl font-medium">
                    <p>Food id: {idMeal}</p>
                    <p>{strMeal}</p>
                </div>
            </div>
            {/* <h1>Hello</h1> */}
        </div>
    );
};

export default CartDetail;