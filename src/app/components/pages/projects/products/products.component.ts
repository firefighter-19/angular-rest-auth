import { Store } from "@ngrx/store";
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from "@angular/material/paginator";
import { MatCardModule } from "@angular/material/card";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSort, MatSortModule } from "@angular/material/sort";

import {
  productsActions,
  productsSelectors,
} from "src/app/shared/data-access/project/products";
import { Observable, Subscription } from "rxjs";
import { IProductsItems } from "src/app/core/interfaces/products";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
  ],
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit, OnDestroy {
  productsSubscription$!: Subscription;

  isLoading$: Observable<boolean> = this.store.select(
    productsSelectors.isLoading
  );

  products: IProductsItems[] = [];
  total: number = 0;
  pagesSize: number = 0;

  displayedColumns: string[] = [
    "position",
    "category",
    "title",
    "image",
    "price",
    "rating",
    "stock",
  ];

  dataSource!: MatTableDataSource<IProductsItems>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(productsActions.productsLoadingAction());

    this.productsSubscription$ = this.store
      .select(productsSelectors.getProducts)
      .subscribe(({ products, total }) => {
        this.dataSource = new MatTableDataSource<IProductsItems>(products);
        this.pagesSize = products.length;
        if (this.paginator) {
          this.paginator.length = total;
          this.paginator.pageIndex = 0;
        }
        this.dataSource.sort = this.sort;
      });
  }

  ngOnDestroy(): void {
    this.productsSubscription$.unsubscribe();
  }

  changePage(event: PageEvent) {
    this.store.dispatch(
      productsActions.setPageParams({
        payload: {
          limit: event.pageSize,
          skip: event.pageSize * event.pageIndex,
        },
      })
    );
  }
}
