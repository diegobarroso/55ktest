import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Result } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnChanges{
  colorRows = false;
  @Input() users!: Result[];
  usersCopy!: Result[];
  filterText!: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.usersCopy = Array.from(changes['users'].currentValue)
  }

  deleteUser(user: Result) {
    this.usersCopy = this.usersCopy.filter(u => u.login.uuid !== user.login.uuid)
  }

  toggleColorRows() {
    this.colorRows = !this.colorRows; 
  }

  sortUsers(criteria: string) {
    switch (criteria) {
      case 'country':
        this.usersCopy = this.usersCopy.sort((a: Result, b: Result) => a.location.country.localeCompare(b.location.country));
        break;
      case 'firstName':
        this.usersCopy = this.usersCopy.sort((a: Result, b: Result) => a.name.first.localeCompare(b.name.first));
        break;
      case 'lastName':
        this.usersCopy = this.usersCopy.sort((a: Result, b: Result) => a.name.last.localeCompare(b.name.last));
        break;
      default:
        break;
    }
  }

  initialState() {
    this.usersCopy = Array.from(this.users);
  }

}
