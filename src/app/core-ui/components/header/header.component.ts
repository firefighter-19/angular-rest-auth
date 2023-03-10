import { authSelectors } from 'src/app/shared/data-access/auth';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isAuth$: Observable<boolean> = this.store.select(authSelectors.selectIsAuth);
  constructor(private readonly store: Store) {}
}
