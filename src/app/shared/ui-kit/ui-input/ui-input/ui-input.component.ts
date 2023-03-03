import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  forwardRef,
  Injector,
  Input,
  OnInit,
} from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
  UntypedFormControl,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { ErrorService } from "src/app/shared/services/error-services/error.service";
import { Subscription } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  selector: "ui-input",
  templateUrl: "./ui-input.component.html",
  styleUrls: ["./ui-input.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInputComponent),
      multi: true,
    },
  ],
  host: {
    "[attr.class]": "customClass",
  },
})
export class UiInputComponent implements OnInit, DoCheck, ControlValueAccessor {
  @Input() placeHolder = "";
  @Input() label = "";
  @Input() maxLength = "";
  @Input() readonly = false;
  @Input() disabled = false;
  @Input() type = "text";
  @Input() validators!: Validators;
  @Input() customClass: string = "";

  @Input() required!: boolean;

  control!: UntypedFormControl;
  ngControl!: NgControl | null;
  isTouched!: boolean | null | undefined;

  controlSubscription!: Subscription;

  get canShowError() {
    return (
      this.ngControl &&
      this.ngControl.errors &&
      (this.control.dirty || this.control.touched || this.ngControl.touched)
    );
  }

  constructor(
    private cdRef: ChangeDetectorRef,
    private errorService: ErrorService,
    private injector: Injector // private formMaskService: FormMaskService
  ) {}

  ngOnInit(): void {
    this.control = new UntypedFormControl(
      {
        value: "",
        disabled: this.disabled,
      },
      this.validators
    );
    this.controlSubscription = this.control.valueChanges.subscribe((value) => {
      this.onTouched();
      this.onChange(value);
    });

    this.ngControl = this.injector.get(NgControl, null);
  }

  ngDoCheck() {
    if (!this.ngControl?.touched) {
      this.isTouched = this.ngControl?.touched;
      this.cdRef.markForCheck();
    }
  }

  onChange: any = () => {};

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  onTouched: any = () => {};

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: string) {
    this.control.patchValue(value);
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    if (this.disabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
    this.cdRef.markForCheck();
  }

  getErrorsMessage() {
    return this.errorService.getNgControlErrorText(this.ngControl!.errors!);
  }

  toggleType(): void {
    if (this.type === "password") {
      this.type = "text";
      return;
    }
    this.type = "password";
    return;
  }

  onType(event: InputEvent): void {
    if (this.type !== "tel") {
      return;
    }
    if (!event.data) {
      return;
    }
  }

  onPaste(event: ClipboardEvent): void {
    if (this.type !== "tel") {
      return;
    }
    let pasteData: string = "";
    if (this.control.value) {
      pasteData = event.clipboardData!.getData("text/plain");
    }
    event.preventDefault();
  }
}
