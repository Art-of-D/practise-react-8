import { useContext, useReducer, useEffect, createContext } from "react";
import cartItems from "./data";
import reducer from "./reducer/reducer";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  DISPLAY_ITEMS,
} from "./reducer/actions";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
  total: 0,
  amount: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getCart = () => {
    dispatch({ type: DISPLAY_ITEMS });
  };
  return (
    <AppContext.Provider value={{ cart: state.cart, getCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
