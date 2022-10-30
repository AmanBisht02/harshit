import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { ForgotPasswordPage } from "./forgot-password/forgot-password.page";
// import { LoginPage } from "./login/login.page";
// import { RegistrationPage } from "./registration/registration.page";
// import { HomePage } from "./home/home.page";

@NgModule({
  declarations: [
    AppComponent,
    // RegistrationPage,
    // ForgotPasswordPage,
    // LoginPage,
    // HomePage,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
