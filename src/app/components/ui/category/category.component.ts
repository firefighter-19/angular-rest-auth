import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ICategory } from "src/app/core/interfaces/categories";

@Component({
  selector: "app-category",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent {
  @Input() category!: ICategory;
}
