import { Component, OnInit } from '@angular/core';
import { User } from '../../user.client.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = new User('', '', '', '');
  constructor(private userService: UserService) { }

  onSubmit() {
    console.log("submitting: ", this.user);
    this.userService.registerUser(this.user).subscribe();
  }

  ngOnInit() {
  }

}
