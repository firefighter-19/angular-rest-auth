import { Action, createReducer, on } from "@ngrx/store";
import { authActions } from ".";

export const authFutureKey = "auth";

export interface AuthState {
  loading: boolean;
  data: any;
  error: string;
}

const initialState = {
  loading: false,
  data: null,
  error: "",
};

const authReducer = createReducer(
  initialState,
  on(authActions.tryAuthAction, (state) => ({ ...state, loading: true })),
  on(authActions.authUserSuccess, (state, data) => ({
    ...state,
    loading: false,
    data,
  })),
  on(authActions.authUserFailed, (state, data) => ({
    ...state,
    loading: false,
    error: data.errorMessage,
  }))
);

export function reducer(state: AuthState, action: Action) {
  return authReducer(state, action);
}
