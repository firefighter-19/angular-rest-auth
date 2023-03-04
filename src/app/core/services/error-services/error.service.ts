import { Injectable } from "@angular/core";
import { ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class ErrorService {
  getNgControlErrorText(errors: ValidationErrors): string {
    if (!errors) {
      return "";
    }

    const key = Object.keys(errors).find(() => true);

    switch (key) {
      case "required":
        return "Field is required";
      case "username":
        return "username is not a valid";
      default:
        return errors[key as string];
    }
  }
}
