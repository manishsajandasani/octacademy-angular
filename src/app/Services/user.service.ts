import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class UserService {
  users: Array<any> = [
    {id: 1, name: "Manish"},
    {id: 1, name: "Sanjay"},
    {id: 1, name: "Rupesh"}
  ]

  addUser(userObj : object) {
    this.users.push(userObj);
  }
}
