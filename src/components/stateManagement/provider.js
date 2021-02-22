import React, { useContext, useReducer, createContext } from "react";

import { cartReducer, cartState } from "./reducers";

const CartContext = createContext();
const DispatchCartContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartState);
  return (
    <CartContext.Provider value={state}>
      <DispatchCartContext.Provider value={dispatch}>
        {children}
      </DispatchCartContext.Provider>
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export const useDispatchCart = () => useContext(DispatchCartContext);
