import { createAction, props } from "@ngrx/store";
import {
  IProducts,
  IProductsPaginationOptions,
} from "src/app/core/interfaces/products";

export enum ProductsActions {
  LOAD_PRODUCTS = "[Products Api] Try load products",
  LOAD_PRODUCTS_WITH_CATEGORY = "[Products Api] Try load products with category",
  PRODUCTS_LOAD_SUCCESS = "[Products Api] Products successfully loaded",
  PRODUCTS_LOAD_ERROR = "[Products Api] Products loading error occur",
  SET_PAGE_PARAMS = "[Products Page] Products page size changed",
}

export const productsLoadingAction = createAction(
  ProductsActions.LOAD_PRODUCTS
);

export const productsLoadingWithCategoryAction = createAction(
  ProductsActions.LOAD_PRODUCTS_WITH_CATEGORY,
  props<{ name: string }>()
);

export const productsSuccessAction = createAction(
  ProductsActions.PRODUCTS_LOAD_SUCCESS,
  props<{ payload: IProducts }>()
);

export const productsErrorAction = createAction(
  ProductsActions.PRODUCTS_LOAD_ERROR,
  props<{ errorMessage: string }>()
);

export const setPageParams = createAction(
  ProductsActions.SET_PAGE_PARAMS,
  props<{ payload: IProductsPaginationOptions }>()
);
