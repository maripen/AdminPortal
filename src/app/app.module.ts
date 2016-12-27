import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {routing} from "./app.routing";
import {LoginService} from "./login.service";
import {LoginComponent} from "./login/login.component";
import {UserAccountComponent} from "./user-account/user-account.component";
import {UserService} from "./user.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
