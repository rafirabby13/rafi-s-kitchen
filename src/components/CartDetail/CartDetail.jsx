/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { RiDeleteBinLine } from "react-icons/ri";
const CartDetail = ({ cartData, handleRemoveFromCart }) => {
  // console.log(cartData);
  const { strMeal, strMealThumb, idMeal } = cartData;
  return (
    <div className="">
      <div className="border-2 flex items-center justify-between gap-4 p-3 rounded-xl">
        <div className="flex items-center gap-4">
          <img className="h-24 rounded-xl" src={strMealThumb} alt="" />
          <div className="text-2xl font-medium">
            <p>Food id: {idMeal}</p>
            <p>{strMeal}</p>
          </div>
        </div>
        <div onClick={()=>handleRemoveFromCart(cartData)} className="text-4xl text-red-600">
          <RiDeleteBinLine />
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
