export type InitialState = {
  total: number;
  done:boolean
  cash: number;
  product: Product<{ amount: number; subTotal: number }>[];
};
export type Context = {
  product: Product<{ amount: number; subTotal: number }>[];
  total: number;
  cash: number;
  done:boolean
  setAmount?: Function;
  setCash?: Function;
  setDone?: Function;
  setTotal?: Function;
  deleteProduct?: Function;
  addProduct?: Function;
};
export type Action =
  | {
      type: "SET_AMOUNT";
      payload: { amount: number; id: string };
    }
  | {
      type: "SET_DONE";
      payload: { done: boolean};
    }
  | {
      type: "SET_TOTAL";
      payload: { total: number };
    }
  | {
      type: "DELETE_PRODUCT";
      payload: { index: number };
    }
  | {
      type: "SET_CASH";
      payload: { cash: number };
    }
  | {
      type: "ADD_PRODUCT";
      payload: { product: Product<{ amount: number; }> };
    };