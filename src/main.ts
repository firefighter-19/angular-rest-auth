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
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    importProvidersFrom(
      StoreModule.forRoot(reducers),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: false, // Restrict extension to log-only mode
      }),
      EffectsModule.forRoot([AuthEffects, ProductsEffects, CategoriesEffects]),
      BrowserAnimationsModule
    ),
  ],
}).catch((err) => console.error(err));
