import { authActions } from ".";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { AuthService } from "../../../core/services/api-services/auth/auth.service";
import { LocalStorageService } from "../../../core/services/local-storage/local-storage.service";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.tryAuthAction),
      switchMap((action) => {
        return this.authService
          .login({
            username: action.username,
            password: action.password,
          })
          .pipe(
            map((data) => {
              const { token } = data;
              this.localStorageService.updateLocalStorageData(
                `Bearer ${token}`
              );
              return authActions.authUserSuccess({ payload: data });
            }),
            catchError((error) => of(authActions.authUserFailed(error)))
          );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private readonly authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}
}
