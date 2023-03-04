import { Action, createReducer, on } from "@ngrx/store";
import { productsActions } from ".";

export const projectFutureKey = "projects";

export interface ProjectState {
  loading: boolean;
  data: any;
  error: string;
  options: {
    filtering: {};
    sorting: "name" | "weight" | "id" | null;
  };
  pagination: {
    first: number;
    last: number;
  };
}

const initialState: ProjectState = {
  loading: false,
  data: null,
  error: "",
  options: {
    filtering: {},
    sorting: null,
  },
  pagination: {
    first: 0,
    last: 10,
  },
};

const productsReducer = createReducer(
  initialState,
  on(productsActions.projectsLoadingAction, (state) => ({
    ...state,
    loading: true,
  })),
  on(productsActions.projectsSuccessAction, (state, data) => ({
    ...state,
    loading: false,
    data,
  })),
  on(productsActions.projectsErrorAction, (state, data) => ({
    ...state,
    loading: false,
    error: data.errorMessage,
  }))
);

export function reducer(state: ProjectState, action: Action) {
  return productsReducer(state, action);
}
