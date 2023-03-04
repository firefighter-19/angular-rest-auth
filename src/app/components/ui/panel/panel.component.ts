import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatExpansionModule } from "@angular/material/expansion";
import { CategoriesComponent } from "src/app/components/pages/projects/categories/categories.component";

@Component({
  selector: "app-panel",
  standalone: true,
  imports: [CommonModule, MatExpansionModule, CategoriesComponent],
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.css"],
})
export class PanelComponent {
  panelOpenState: boolean = false;
}
