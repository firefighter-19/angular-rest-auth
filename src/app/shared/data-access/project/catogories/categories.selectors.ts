import { createFeatureSelector, createSelector } from "@ngrx/store";
import { categoriesFutureKey, CategoriesState } from "./categories.reducer";

const categoryState =
  createFeatureSelector<CategoriesState>(categoriesFutureKey);

export const getCategoryState = createSelector(categoryState, (state) => state);

export const getCategoriesList = createSelector(
  getCategoryState,
  (state) => state.data
);
