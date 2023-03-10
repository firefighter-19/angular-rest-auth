import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authFutureKey, AuthState } from "./auth.reducer";

const authState = createFeatureSelector<AuthState>(authFutureKey);

export const getAuthState = createSelector(authState, (state) => state);

export const selectIsAuth = createSelector(authState, (state) => !!state.data.firstName.length)
