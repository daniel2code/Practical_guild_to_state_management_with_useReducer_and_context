import React from "react";
import { useDispatchCart } from "../stateManagement/provider";

import "../styles/cartItem.css";

function CartItem({ item }) {
  const dispatch = useDispatchCart();

  const handleRemove = (item) => {
    return dispatch({ type: "REMOVE_ITEM", item });
  };

  return (
    <div>
      <div className="cart-box-item">
        <img src={item.imageUrl} className="product-image" />
        <div className="cart-body">
          <h4>{item.type}</h4>
          <p>{item.description}</p>
          <p>${item.price}</p>
          <button className="remove-btn" onClick={() => handleRemove(item)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
