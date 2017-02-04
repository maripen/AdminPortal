import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getUsers() {
    let url = "http://localhost:8080/api/user/list";
    return this.http.get(url, {withCredentials: true});
  }

  getPrimaryTransactionList(username: String) {
    let url = "http://localhost:8080/api/user/primary/transaction?username=" + username;
    return this.http.get(url, {withCredentials: true});
  }

  getSavingsTransactionList(username: String) {
    let url = "http://localhost:8080/api/user/savings/transaction?username=" + username;
    return this.http.get(url, {withCredentials: true});
  }

  enableUser(username: String) {
    let url = "http://localhost:8080/api/user/" + username + "/enable";
    return this.http.get(url, {withCredentials: true});
  }

  disableUser(username: String) {
    let url = "http://localhost:8080/api/user/" + username + "/disable";
    return this.http.get(url, {withCredentials: true});
  }
}
