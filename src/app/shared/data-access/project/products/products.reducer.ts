import { Action, createReducer, on } from "@ngrx/store";
import {
  IProducts,
  IProductsPaginationOptions,
} from "src/app/core/interfaces/products";
import { productsActions } from ".";

export const productFutureKey = "products";

export interface ProductState {
  loading: boolean;
  products: IProducts;
  error: string;
  options: {
    filtering: {};
    sorting: "name" | "weight" | "id" | null;
  };
  pagination: IProductsPaginationOptions;
}

const initialState: ProductState = {
  loading: false,
  products: {
    products: [],
    total: 0,
  },
  error: "",
  options: {
    filtering: {},
    sorting: null,
  },
  pagination: {
    limit: 10,
    skip: 0,
  },
};

const productsReducer = createReducer(
  initialState,
  on(productsActions.productsLoadingAction, (state) => ({
    ...state,
    loading: true,
  })),
  on(productsActions.productsSuccessAction, (state, { payload }) => ({
    ...state,
    loading: false,
    products: {
      ...state.products,
      products: payload.products,
      total: payload.total,
    },
  })),
  on(productsActions.productsErrorAction, (state, data) => ({
    ...state,
    loading: false,
    error: data.errorMessage,
  })),
  on(productsActions.setPageParams, (state, { payload }) => ({
    ...state,
    pagination: {
      ...state.pagination,
      limit: payload.limit,
      skip: payload.skip,
    },
    loading: true,
  }))
);

export function reducer(state: ProductState, action: Action) {
  return productsReducer(state, action);
}
