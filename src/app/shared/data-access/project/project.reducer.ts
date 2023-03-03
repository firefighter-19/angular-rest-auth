import { Action, createReducer, on } from "@ngrx/store";
import { projectActions } from ".";

export const projectFutureKey = "projects";

export interface ProjectState {
  loading: boolean;
  data: any;
  error: string;
}

const initialState = {
  loading: false,
  data: null,
  error: "",
};

const projectReducer = createReducer(
  initialState,
  on(projectActions.projectsLoadingAction, (state) => ({
    ...state,
    loading: true,
  })),
  on(projectActions.projectsSuccessAction, (state, data) => ({
    ...state,
    loading: false,
    data,
  })),
  on(projectActions.projectsErrorAction, (state, data) => ({
    ...state,
    loading: false,
    error: data.errorMessage,
  }))
);

export function reducer(state: ProjectState, action: Action) {
  return projectReducer(state, action);
}
