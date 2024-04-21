import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../components/Redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleRemove = (itemId) => {
    dispatch(remove(itemId));
  };

  return (
    <div className="cartWrapper">
      {cartItems.map((item, index) => {
        return (
          <div className="cartCard" key={index}>
            <img src={item.images[0]} alt="img" />
            <h4>{item.title}</h4>
            <h5>₹ {item.price}</h5>
            <button className="btn" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
            {/* No need for Add to Cart button in Cart component */}
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
