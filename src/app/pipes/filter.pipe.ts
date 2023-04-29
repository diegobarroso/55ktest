import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../models/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: Result[], text: string): Result[] {
    // You could also use
    // users.filter((user: Result) => user.location.country.toLocaleLowerCase().startsWith(text.toLocaleLowerCase())) :
    return text ? 
    users.filter((user: Result) => user.location.country.toLocaleLowerCase().includes(text.toLocaleLowerCase())) :
    users;
  }

}
