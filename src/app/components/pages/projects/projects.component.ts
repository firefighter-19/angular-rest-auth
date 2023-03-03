import { ActivatedRoute, RouterModule } from "@angular/router";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectComponent } from "../ui/project/project.component";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent {
  id: string = "1";
  constructor() {}
}
