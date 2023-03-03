import { ActionReducer, ActionReducerMap } from "@ngrx/store";
import { authReducer } from "./auth";
import { projectReducer } from "./project";

export interface AppState {
  [key: string]: any;
}

export const reducers: ActionReducerMap<AppState> = {
  [authReducer.authFutureKey]: authReducer.reducer,
  [projectReducer.projectFutureKey]: projectReducer.reducer,
};
