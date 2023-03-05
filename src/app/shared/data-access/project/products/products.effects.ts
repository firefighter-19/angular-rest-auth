import { productsActions, productsSelectors } from ".";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, withLatestFrom } from "rxjs";
import { ProductsService } from "src/app/core/services/api-services/products/products.service";
import { Store } from "@ngrx/store";

@Injectable()
export class ProductsEffects {
  getAllProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        ...[
          productsActions.productsLoadingAction,
          productsActions.setPageParams,
        ]
      ),
      withLatestFrom(this.store.select(productsSelectors.getPaginationOptions)),
      switchMap(([_, { limit, skip }]) => {
        return this.productsService
          .getAllProducts({
            limit,
            skip,
          })
          .pipe(
            map((data) => {
              return productsActions.productsSuccessAction({ payload: data });
            }),
            catchError((error) =>
              of(productsActions.productsErrorAction(error))
            )
          );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private readonly productsService: ProductsService,
    private readonly store: Store
  ) {}
}
