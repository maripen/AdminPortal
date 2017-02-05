import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-primary-transaction',
  templateUrl: './primary-transaction.component.html',
  styleUrls: ['./primary-transaction.component.css']
})
export class PrimaryTransactionComponent implements OnInit {

  primaryTransactionList : Object[];
  username: string;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.forEach((params: Params) => {
      this.username = params['username'];
    });

    this.getPrimaryTransactionList();
  }

  private getPrimaryTransactionList() {
    this.userService.getPrimaryTransactionList(this.username).subscribe(
      res => {
        this.primaryTransactionList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
      },
      error => console.log(error)
    )
  }

  ngOnInit() {
  }
}
