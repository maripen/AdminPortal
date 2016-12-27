import {Component, OnInit} from "@angular/core";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  username: string;
  password: string;

  constructor(private loginService: LoginService) {
    this.loggedIn = !(localStorage.getItem("portalAdminHasLoggedIn") == ''
    || localStorage.getItem("portalAdminHasLoggedIn") == null);
  }

  onSubmit() {
    this.loginService.sendCredential(this.username, this.password).subscribe(
      res => {
        this.loggedIn = true;
        localStorage.setItem("portalAdminHasLoggedIn", 'true');
        location.reload();
      },
      err => console.log(err)
    );
  }

  ngOnInit() {
  }

}
