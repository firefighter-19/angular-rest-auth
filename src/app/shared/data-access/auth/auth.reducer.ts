import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { authActions } from ".";

export const authFutureKey = "auth";

interface AuthState {
  loading: boolean;
  data: any;
}

const initialState = {
  loading: false,
  data: null,
};

const authReducer = createReducer(
  initialState,
  on(authActions.authUserSuccess, (state, data) => ({ ...state, data }))
);

export function reducer(state: AuthState, action: Action) {
  return authReducer(state, action);
}
