export const cartState = [];

export const cartReducer = (state, action) => {
  if (action.type === "ADD_CART") {
    return [...state, action.item];
  } else if (action.type === "REMOVE_ITEM") {
    return [...state].filter((item) => {
      return item !== action.item;
    });
  } else {
    throw new Error(action.type);
  }
};
