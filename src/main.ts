import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { appRoutes } from "./app/app.route";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideHttpClient } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./app/shared/data-access";
import { importProvidersFrom } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./app/shared/data-access/auth";
import { CategoriesEffects } from "./app/shared/data-access/project/catogories";
import { ProductsEffects } from "./app/shared/data-access/project/products";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    importProvidersFrom(
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot([AuthEffects, ProductsEffects, CategoriesEffects])
    ),
  ],
}).catch((err) => console.error(err));
