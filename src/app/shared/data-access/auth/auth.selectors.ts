import { createFeatureSelector } from "@ngrx/store";
import { authFutureKey } from "./auth.reducer";

const authState = createFeatureSelector(authFutureKey);
