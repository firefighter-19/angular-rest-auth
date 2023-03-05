import { categoriesActions } from ".";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, take } from "rxjs";
import { CategoriesService } from "src/app/core/services/api-services/categories/categories.service";

@Injectable()
export class CategoriesEffects {
  getCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(categoriesActions.categoriesLoadingAction),
      switchMap(() => {
        return this.categoryService.getAllCategories().pipe(
          map((data) => {
            const categoriesWithSelect = data.map((category) => ({
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

  /*
    "setCategoryEffect" was written because there is a problem with "mat-chip-listbox"
    component. The dispatch action with inner method "selectionChange" works twice. To fix it we will get only the first value.
  */

  setCategory$ = createEffect(() => {
    return this.actions$.pipe(
      take(1),
      ofType(categoriesActions.selectCategory),
      map(({ name }) => categoriesActions.setSelectedCategory({ name }))
    );
  });

  constructor(
    private actions$: Actions,
    private readonly categoryService: CategoriesService
  ) {}
}
