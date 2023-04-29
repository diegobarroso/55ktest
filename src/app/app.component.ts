import { Component, OnInit } from '@angular/core';
import { Result, User } from './models/user';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: Result[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe((response) => {
        this.users = response.results;
      })
  }
}



