import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private serverAPI = 'http://localhost:8088';

  registerUser(user) {
    const URI = `${this.serverAPI}/api/users`;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, {user: user}, {headers: headers});
  }

  login(username, password) {
    const URI = `${this.serverAPI}/api/users/login`;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let loginDetails = {
      username: username,
      password: password
    }
    return this.http.post(URI, loginDetails, {headers: headers});
  }
}
