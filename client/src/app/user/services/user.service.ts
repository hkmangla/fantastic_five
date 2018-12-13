import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private serverAPI = 'http://localhost:8088';

  registerUser(user) {
    const URI = `${this.serverAPI}/users/api`;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, user, {headers: headers});
  }
}
