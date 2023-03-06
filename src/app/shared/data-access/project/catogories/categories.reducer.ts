import { Action, createReducer, on } from "@ngrx/store";
import { ICategory } from "src/app/core/interfaces/categories";
import { categoriesActions } from ".";

export const categoriesFutureKey = "categories";

export interface CategoriesState {
  loading: boolean;
  categories: ICategory[];
  error: string;
}

const initialState: CategoriesState = {
  loading: false,
  categories: [],
  error: "",
};

const categoriesReducer = createReducer(
  initialState,
  on(categoriesActions.categoriesLoadingAction, (state) => ({
    ...state,
    loading: true,
  })),
  on(categoriesActions.categoriesSuccessAction, (state, data) => ({
    ...state,
    loading: false,
    categories: data.payload,
  })),
  on(categoriesActions.selectCategory, (state, payload) => ({
    ...state,
    categories: state.categories.map((category) => ({
      ...category,
      selected: payload.name === category.name,
    })),
  })),
  on(categoriesActions.resetFilters, (state) => ({
    ...state,
    categories: state.categories.map((category) => ({
      ...category,
      selected: false,
    })),
  })),
  on(categoriesActions.categoriesErrorAction, (state, data) => ({
    ...state,
    loading: false,
    error: data.errorMessage,
  }))
);

export function reducer(state: CategoriesState, action: Action) {
  return categoriesReducer(state, action);
}
