/* eslint-disable react/prop-types */

import { useNavigate, useOutletContext } from "react-router-dom";
import CartDetail from "../CartDetail/CartDetail.jsx";

const Cart = () => {
  const cartData = useOutletContext();
  const cartAllData = cartData?.cartData;
  const navigate = useNavigate()
//   console.log(cartAllData);
const handleNavigate=()=>{
    navigate(-1)
}
  return (
    <div className="col-span-3">
      <div className="grid lg:grid-cols-2 gap-3">
      {cartAllData.length > 0 ? (
        cartAllData.map((cartData, index) => (
          <CartDetail key={index} cartData={cartData}></CartDetail>
        ))
      ) : (
        <h1>No Item Added yet</h1>
      )}
      </div>
      <button className="btn btn-secondary mt-10" onClick={handleNavigate}>Go Back</button>
    </div>
  );
};

export default Cart;
