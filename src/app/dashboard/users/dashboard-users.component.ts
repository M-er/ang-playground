import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';


@Component({

  selector: 'app-dashboard',
  templateUrl: './users-list.html',
  styleUrls: ['./users-list.css']

})

export class DashboardUsersComponent implements OnInit {
  users: User[];
  constructor(private service: UserService) {}
  ngOnInit() {
    this.service.getUsers().then(users => this.users = users); 
  }
  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

}