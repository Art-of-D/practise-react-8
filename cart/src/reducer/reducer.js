const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: new Map() };
  }

  if (action.type === "REMOVE") {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }

  if (action.type === "INCREASE") {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    if (item) {
      newCart.set(action.payload.id, { ...item, amount: item.amount + 1 });
    }
    return { ...state, cart: newCart };
  }

  if (action.type === "DECREASE") {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    if (item) {
      const newAmount = item.amount - 1;
      if (newAmount > 0) {
        newCart.set(action.payload.id, { ...item, amount: newAmount });
      } else {
        newCart.delete(action.payload.id);
      }
    }
    return { ...state, cart: newCart };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_ITEMS") {
    const newCart = new Map();
    action.payload.cart.forEach((item) => {
      newCart.set(item.id, item);
    });
    return { ...state, cart: newCart, loading: false };
  }

  return state;
};

export default reducer;
