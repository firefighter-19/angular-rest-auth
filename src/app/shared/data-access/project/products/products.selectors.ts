import { createFeatureSelector, createSelector } from "@ngrx/store";
import { productFutureKey, ProductState } from "./products.reducer";

const productsState = createFeatureSelector<ProductState>(productFutureKey);

export const getProductsState = createSelector(productsState, (state) => state);

export const getPaginationOptions = createSelector(
  getProductsState,
  (state) => state.pagination
);

export const getProducts = createSelector(
  getProductsState,
  (state) => state.products
);

export const isLoading = createSelector(
  getProductsState,
  (state) => state.loading
);
