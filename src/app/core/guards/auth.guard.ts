import { Router } from "@angular/router";
import { LocalStorageService } from "src/app/core/services/local-storage/local-storage.service";
import { inject } from "@angular/core";
import { authSelectors } from "src/app/shared/data-access/auth";

/*
  Unfortunately dummyjson api doesn't allow us to check our token validity, so we will just check its existing in local storage.
*/
export const AuthGuard = (
  localStorage = inject(LocalStorageService),
  router = inject(Router)
) => {
  if (localStorage.getData("Authorization")) {
    return true;
  }
  router.navigate(["/auth"]);
  return false;
};
