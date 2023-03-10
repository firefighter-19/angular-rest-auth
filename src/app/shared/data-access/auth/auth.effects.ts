import { authActions } from ".";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "src/app/core/services/api-services/auth/auth.service";
import { LocalStorageService } from "src/app/core/services/local-storage/local-storage.service";
import { ILogin } from "src/app/core/interfaces/login";

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
              const authData: ILogin = {
                email: data.email,
                firstName: data.firstName,
                gender: data.gender,
                id: data.id,
                image: data.image,
                lastName: data.lastName,
                username: data.username
              }
              return authActions.authUserSuccess({ payload: authData });
            }),
            catchError((error) => of(authActions.authUserFailed(error)))
          );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private readonly authService: AuthService,
    private localStorageService: LocalStorageService,
  ) {}
}
