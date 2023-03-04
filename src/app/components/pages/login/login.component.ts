import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { UiInputComponent } from "src/app/shared/ui-kit/ui-input/ui-input.component";
import { Store } from "@ngrx/store";
import { authActions } from "src/app/shared/data-access/auth";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UiInputComponent],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  form!: FormGroup<{
    username: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", Validators.required),
    });
  }

  onSignIn() {
    const { username, password } = this.form.value as {
      username: string;
      password: string;
    };
    this.store.dispatch(authActions.tryAuthAction({ username, password }));
  }
}
