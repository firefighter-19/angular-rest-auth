import { categoriesActions } from ".";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CategoriesService } from "src/app/core/services/api-services/categories/categories.service";

@Injectable()
export class CategoriesEffects {
  getCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(categoriesActions.categoriesLoadingAction),
      switchMap(() => {
        return this.categoryService.getAllCategories().pipe(
          map((data) => {
            const categoriesWithSelect = (data as string[]).map((category) => ({
              name: category,
              selected: false,
            }));
            return categoriesActions.categoriesSuccessAction({
              payload: categoriesWithSelect,
            });
          }),
          catchError((error) =>
            of(categoriesActions.categoriesErrorAction(error))
          )
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private readonly categoryService: CategoriesService
  ) {}
}
