import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { authSelectors } from "src/app/shared/data-access/auth";

/*
  Unfortunately dummyjson api doesn't allow us to check our token validity, so we will just check its existing in local storage.
*/
export const AuthGuard = (store = inject(Store)) => store.select(authSelectors.selectIsAuth)

