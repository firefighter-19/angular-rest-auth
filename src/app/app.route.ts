import { AuthGuard } from "./core/guards/auth.guard";
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./routes/auth.route").then((m) => m.authRoutes),
  },
  {
    path: "projects",
    loadChildren: () =>
      import("./routes/projects.route").then((m) => m.projectRoutes),
    canMatch: [() => AuthGuard()],
  },
  {
    path: "**",
    loadComponent: () =>
      import("./core-ui/components/not-found/not-found.component").then(
        (c) => c.NotFoundComponent
      ),
  },
];
