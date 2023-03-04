import { RouterModule } from "@angular/router";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PanelComponent } from "../../ui/panel/panel.component";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, RouterModule, PanelComponent],
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent {
  id: string = "1";
  constructor() {}
}
