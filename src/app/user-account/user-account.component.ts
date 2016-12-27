import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  userList: Object[];

  constructor(private userService: UserService, private router: Router) {
    this.getUsers();
  }

  ngOnInit() {
  }

  private getUsers() {
    this.userService.getUsers().subscribe(
      res => {
        this.userList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
      },
      error => console.log(error)
    )
  }

  onSelectPrimary(username: String) {
    this.router.navigate(['/primaryTransaction'], username);
  }

  onSelectSavings(username: String) {
    this.router.navigate(['/savingsTransaction'], username);
  }

  enableUser(username: String) {
    this.userService.enableUser(username).subscribe();
    location.reload();
  }

}
