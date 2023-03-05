import { RouterModule } from "@angular/router";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PanelComponent } from "../../ui/panel/panel.component";
import { ProductsComponent } from "./products/products.component";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, RouterModule, PanelComponent, ProductsComponent],
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  id: string = "1";
}
