import { createAction, props } from "@ngrx/store";
import { ILogin } from "../../../core/interfaces/login";

export enum AuthActions {
  AUTH_USER = "[Auth Api] Try user get auth",
  AUTH_USER_SUCCESS = "[Auth Api] Auth user success",
  AUTH_USER_FAILED = "[Auth Api] Auth user failed",
}

export const tryAuthAction = createAction(
  AuthActions.AUTH_USER,
  props<{ username: string; password: string }>()
);

export const authUserSuccess = createAction(
  AuthActions.AUTH_USER_SUCCESS,
  props<{ payload: Partial<ILogin> }>()
);

export const authUserFailed = createAction(
  AuthActions.AUTH_USER_FAILED,
  props<{ errorMessage: string }>()
);
