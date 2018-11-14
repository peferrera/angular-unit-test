import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  credentials = { user: '', password: '' };
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.credentials.user = this.loginForm.controls['user'].value;
    this.credentials.password = this.loginForm.controls['password'].value;
    console.log(this.credentials);
  }

  // updateUsername(newUser) {
  //   this.credentials.user = newUser.user;
  // }

  // updatePassword(newPassword) {
  //   this.credentials.password = newPassword.password;
  // }

  get user() {
    return this.loginForm.get('user');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
