import { Action, createReducer, on } from "@ngrx/store";
import { categoriesActions } from ".";

export const categoriesFutureKey = "categories";

export interface CategoriesState {
  loading: boolean;
  data: any;
  error: string;
}

const initialState: CategoriesState = {
  loading: false,
  data: null,
  error: "",
};

const projectReducer = createReducer(
  initialState,
  on(categoriesActions.categoriesLoadingAction, (state) => ({
    ...state,
    loading: true,
  })),
  on(categoriesActions.categoriesSuccessAction, (state, data) => ({
    ...state,
    loading: false,
    data,
  })),
  on(categoriesActions.categoriesErrorAction, (state, data) => ({
    ...state,
    loading: false,
    error: data.errorMessage,
  }))
);

export function reducer(state: CategoriesState, action: Action) {
  return projectReducer(state, action);
}
