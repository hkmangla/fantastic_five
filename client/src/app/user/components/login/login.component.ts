import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private userService: UserService) { }

  onLogin() {
    this.userService.login(this.username, this.password).subscribe();
  }
  ngOnInit() {
  }

}
