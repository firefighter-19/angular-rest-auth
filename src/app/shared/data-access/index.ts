import { ActionReducerMap } from "@ngrx/store";
import { authReducer } from "./auth";
import { categoriesReducer } from "./project/catogories";
import { productsReducer } from "./project/products";

export interface AppState {
  [key: string]: any;
}

export const reducers: ActionReducerMap<AppState> = {
  [authReducer.authFutureKey]: authReducer.reducer,
  [productsReducer.productFutureKey]: productsReducer.reducer,
  [categoriesReducer.categoriesFutureKey]: categoriesReducer.reducer,
};
