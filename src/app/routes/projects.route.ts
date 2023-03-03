import { Routes } from "@angular/router";
import { ProjectsComponent } from "../components/pages/projects/projects.component";
import { ProjectComponent } from "../components/pages/ui/project/project.component";

export const projectRoutes: Routes = [
  {
    path: "",
    component: ProjectsComponent,
  },
  {
    path: ":id",
    component: ProjectComponent,
  },
];
