import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  private userList: User[] = [{
    id: 1,
    name: 'people',
    dob: new Date('08/31/1992'),
    email: 'peopletech@gmail.com',
    gender: 'Male',
    mobile: '9195987455',
    isActive: true,
    range: [0, 10],
    userType: 'Admin'
  }];
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userList}​​​`);
  }
  getData(){

    let url= "https://crudcrud.com/api/14936d8456e84cb18c19e71b9cb16206/userList";

    return this.http.get(url);

}

  getUsers() {
    return this.userList
  }
  getUsersByID(id: number) {
    return this.userList.find(x => x.id == id)
  }
  addUser(user: User) {
    user.id = new Date().getTime();
    this.userList.push(user);
  }
  updateUser(user: User) {
    const userIndex = this.userList.findIndex(x => x.id == user.id);
    if (userIndex != null && userIndex != undefined) {
      this.userList[userIndex] = user;
    }
  }
  removeUser(id: number) {
    this.userList = this.userList.filter(x => x.id != id);
  }
}
