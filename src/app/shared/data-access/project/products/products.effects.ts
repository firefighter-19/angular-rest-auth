import { productsActions } from ".";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { ProductsService } from "src/app/core/services/api-services/products/products.service";

@Injectable()
export class ProductsEffects {
  // getProjects$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(projectActions.projectsLoadingAction),
  //     switchMap((action) => {
  //       return this.authService
  //         .login({
  //           username: action.username,
  //           password: action.password,
  //         })
  //         .pipe(
  //           map((data) => {
  //             const { token } = data;
  //             this.localStorageService.updateLocalStorageData(
  //               `Bearer ${token}`
  //             );
  //             return authActions.authUserSuccess({ payload: data });
  //           }),
  //           catchError((error) => of(authActions.authUserFailed(error)))
  //         );
  //     })
  //   );
  // });

  constructor(
    private actions$: Actions,
    private readonly productsService: ProductsService
  ) {}
}
