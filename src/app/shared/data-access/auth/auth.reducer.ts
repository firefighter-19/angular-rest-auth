import { Action, createReducer, on } from "@ngrx/store";
import { authActions } from ".";
import { ILogin } from "../../services/api-services/auth/interfaces";

export const authFutureKey = "auth";

export interface AuthState {
  loading: boolean;
  data: Partial<ILogin>;
  error: string;
}

const initialState: AuthState = {
  loading: false,
  data: {
    email: "",
    firstName: "",
    gender: "",
    id: 0,
    image: "",
    lastName: "",
    username: "",
  },
  error: "",
};

const authReducer = createReducer(
  initialState,
  on(authActions.tryAuthAction, (state) => ({ ...state, loading: true })),
  on(authActions.authUserSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    data: payload,
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
