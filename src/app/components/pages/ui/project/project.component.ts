import { ActivatedRoute, RouterModule } from "@angular/router";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-project",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent {
  constructor(private readonly router: ActivatedRoute) {}
}
