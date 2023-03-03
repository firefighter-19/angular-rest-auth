import { Routes } from "@angular/router";

export const authRoutes: Routes = [
  {
    path: "login",
    loadComponent: () =>
      import("../components/pages/login/login.component").then(
        (c) => c.LoginComponent
      ),
  },
];
