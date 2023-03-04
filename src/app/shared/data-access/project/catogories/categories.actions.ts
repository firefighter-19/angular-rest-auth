import { createAction, props } from "@ngrx/store";

export enum CategoriesActions {
  LOAD_CATEGORIES = "[Categories Api] Try load categories",
  CATEGORIES_LOAD_SUCCESS = "[Categories Api] Categories successfully loaded",
  CATEGORIES_LOAD_ERROR = "[Categories Api] Categories loading error occur",
}

export const categoriesLoadingAction = createAction(
  CategoriesActions.LOAD_CATEGORIES
);

export const categoriesSuccessAction = createAction(
  CategoriesActions.CATEGORIES_LOAD_SUCCESS,
  props<any>()
);

export const categoriesErrorAction = createAction(
  CategoriesActions.CATEGORIES_LOAD_ERROR,
  props<{ errorMessage: string }>()
);
