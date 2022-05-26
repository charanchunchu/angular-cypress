import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Users } from "../user";

@Injectable({
  providedIn: 'root'
})
export class sortService {
  url = "http://localhost:3000/Users";
  constructor(private http: HttpClient) {
  }
  getUsers() {

    return this.http.get<Users[]>(this.url);

  }
}
