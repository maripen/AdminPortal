import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;

  constructor(private loginService: LoginService, private router: Router) {
    if (localStorage.getItem("portalAdminHasLoggedIn") == ''
      || localStorage.getItem("portalAdminHasLoggedIn") == null) {
      this.loggedIn = false;
    }
    else {
      this.loggedIn = true;
    }
  }

  logout() {
    this.loginService.logOut().subscribe(
      res => {
        localStorage.setItem('portalAdminHasLoggedIn', '');
      },
      err => console.log(err)
    );
    location.reload();
    this.router.navigate(['/login']);
  }

  getDisplay() {
    if (!this.loggedIn) {
      return "none";
    }
    else {
      return "";
    }
  }

  ngOnInit() {
  }

}
