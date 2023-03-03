import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./core-ui/components/header/header.component";
import { FooterComponent } from "./core-ui/components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = "project";
}
