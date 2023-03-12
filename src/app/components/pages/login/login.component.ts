import { MatCardModule } from "@angular/material/card";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Store } from "@ngrx/store";
import { authActions, authSelectors } from "src/app/shared/data-access/auth";
import { MatButtonModule } from "@angular/material/button";
import { Observable } from "rxjs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form: FormGroup<{
    username: FormControl<string | null>;
    password: FormControl<string | null>;
  }> = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  isAuthLoading$: Observable<boolean> = this.store.select(
    authSelectors.isAuthLoading
  );

  errorMessage$: Observable<string> = this.store.select(
    authSelectors.authErrorMessage
  );

  constructor(private readonly store: Store) {}

  onSignIn() {
    const { username, password } = this.form.value as {
      username: string;
      password: string;
    };
    this.store.dispatch(authActions.tryAuthAction({ username, password }));
  }
}
