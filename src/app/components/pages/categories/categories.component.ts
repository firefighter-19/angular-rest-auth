import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import {
  categoriesActions,
  categoriesSelectors,
} from "src/app/shared/data-access/project/catogories";
import { CategoryComponent } from "../../ui/category/category.component";
import { Observable } from "rxjs";
import { ICategory } from "src/app/core/interfaces/categories";

@Component({
  selector: "app-categories",
  standalone: true,
  imports: [CommonModule, CategoryComponent],
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
})
export class CategoriesComponent implements OnInit {
  constructor(private readonly store: Store) {}

  categories$: Observable<ICategory[]> = this.store.select(
    categoriesSelectors.getCategoriesList
  );

  ngOnInit(): void {
    this.store.dispatch(categoriesActions.categoriesLoadingAction());
  }
}
