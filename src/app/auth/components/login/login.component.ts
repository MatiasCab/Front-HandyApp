import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { UserInputComponent } from '../user-input/user-input.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  @ViewChild('username') usernameInput?: UserInputComponent;
  @ViewChild('password') passwordInput?: UserInputComponent;
  errorMessage?: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigateByUrl('/register');
  }

  forgotpass() {
    this.router.navigateByUrl('/recoverpassword');
  }

  login() {
    let username = this.usernameInput?.InputInfo ? this.usernameInput?.InputInfo : '';
    const password = this.passwordInput?.InputInfo ? this.passwordInput?.InputInfo : '';

    this.authService.login(username, password).subscribe(response => {
      if (response.error) {
        if (response.type == 'InvalidCredentials') {
          this.errorMessage = 'Nombre de usuario y/o contraseña incorrectos';
        } else {
          this.errorMessage = 'Lo sentimos no hemos podido procesar su solicitud';
        }
      } else {
        this.router.navigateByUrl('/home');
      }
    });
  }

  //TODO VALIDATORS
}
