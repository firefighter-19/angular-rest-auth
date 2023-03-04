import { CategoriesComponent } from "./../categories/categories.component";
import { RouterModule } from "@angular/router";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule, RouterModule, CategoriesComponent],
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent {
  id: string = "1";
  constructor() {}
}
