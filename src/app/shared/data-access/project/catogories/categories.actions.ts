import { createAction, props } from "@ngrx/store";
import { ICategory } from "src/app/core/interfaces/categories";

export enum CategoriesActions {
  LOAD_CATEGORIES = "[Categories Api] Try load categories",
  CATEGORIES_LOAD_SUCCESS = "[Categories Api] Categories successfully loaded",
  CATEGORIES_LOAD_ERROR = "[Categories Api] Categories loading error occur",
  SELECT_CATEGORY = "[Category Page] Select category",
  RESET_FILTERS = "[Category Page] Reset filters",
}

export const categoriesLoadingAction = createAction(
  CategoriesActions.LOAD_CATEGORIES
);

export const categoriesSuccessAction = createAction(
  CategoriesActions.CATEGORIES_LOAD_SUCCESS,
  props<{ payload: ICategory[] }>()
);

export const categoriesErrorAction = createAction(
  CategoriesActions.CATEGORIES_LOAD_ERROR,
  props<{ errorMessage: string }>()
);

export const selectCategory = createAction(
  CategoriesActions.SELECT_CATEGORY,
  props<{ name: string }>()
);

export const resetFilters = createAction(CategoriesActions.RESET_FILTERS);
