"use client";
import { Product } from "@/type";
import { Action, Context, InitialState } from "@/type/transactionContext";
import { ReactNode, createContext, useContext, useReducer } from "react";
import { toast } from "sonner";

const initialState: InitialState = {
  total: 0,
  done: false,
  cash: 0,
  product: [],
};

const context: Context = {
  ...initialState,
};

const reducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case "SET_AMOUNT":
      const items = state.product.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            amount: action.payload.amount,
            subTotal: item.price * action.payload.amount,
          };
        }
        return item;
      });
      return {
        ...state,
        product: items,
      };
    case "DELETE_PRODUCT":
      state.product.splice(action.payload.index, 1);
      return {
        ...state,
      };
    case "SET_TOTAL":
      return { ...state, total: action.payload.total };
    case "SET_DONE":
      return { ...state, done: action.payload.done };
    case "SET_CASH":
      return { ...state, cash: action.payload.cash };
    case "ADD_PRODUCT":
      if (typeof action.payload.product.id == "undefined") {
        toast("Select product first");
        return state;
      }
      if (
        typeof state.product.find(
          (item) => item.id == action.payload.product.id
        ) !== "undefined"
      ) {
        toast("Product has been added");

        return state;
      }

      return {
        ...state,
        product: [
          ...state.product,
          {
            ...action.payload.product,
            subTotal:
              action.payload.product.amount * action.payload.product.price,
          },
        ],
      };
    default:
      return state;
  }
};

const TransactionContext = createContext<Context>(context);
export const useTransaction = () => useContext(TransactionContext);

export default function TransactionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setAmount = (amount: number, id: string) => {
    dispatch({ type: "SET_AMOUNT", payload: { amount, id } });
  };
  const setCash = (cash: number) => {
    dispatch({ type: "SET_CASH", payload: { cash } });
  };
  const setDone = (done: boolean) => {
    dispatch({ type: "SET_DONE", payload: { done } });
  };
  const setTotal = () => {
    const total = state.product.reduce((prev, item) => {
      return prev + item.subTotal;
    }, 0);
    dispatch({ type: "SET_TOTAL", payload: { total } });
  };
  const deleteProduct = (index: number) => {
    dispatch({ type: "DELETE_PRODUCT", payload: { index } });
  };
  const addProduct = (
    product: Product<{ amount: number; subTotal: number }>
  ) => {
    dispatch({ type: "ADD_PRODUCT", payload: { product } });
  };
  return (
    <TransactionContext.Provider
      value={{
        ...state,
        setAmount,
        addProduct,
        deleteProduct,
        setTotal,
        setCash,
        setDone,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
