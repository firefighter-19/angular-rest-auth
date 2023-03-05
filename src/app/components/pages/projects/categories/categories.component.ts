import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatChipsModule } from "@angular/material/chips";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { Store } from "@ngrx/store";
import {
  categoriesActions,
  categoriesSelectors,
} from "src/app/shared/data-access/project/catogories";
import { Observable } from "rxjs";
import { ICategory } from "src/app/core/interfaces/categories";

@Component({
  selector: "app-categories",
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatProgressBarModule],
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent implements OnInit {
  constructor(private readonly store: Store) {}

  categories$: Observable<ICategory[]> = this.store.select(
    categoriesSelectors.getCategoriesList
  );

  isCategoryLoading$: Observable<boolean> = this.store.select(
    categoriesSelectors.getCategoryLoader
  );

  ngOnInit(): void {
    this.store.dispatch(categoriesActions.categoriesLoadingAction());
  }

  selectCategory(name: string) {
    this.store.dispatch(categoriesActions.selectCategory({ name }));
  }
}
