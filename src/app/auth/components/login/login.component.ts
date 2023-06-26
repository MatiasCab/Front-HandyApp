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
  invalidCredentials:boolean = false;
  emptyCredentials:boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigateByUrl('/signup');
  }

  forgotpass() {
    this.router.navigateByUrl('/recoverpassword');
  }

  login() {
    this.invalidCredentials = false
    this.emptyCredentials = false
    
    let username = this.usernameInput?.InputInfo ? this.usernameInput?.InputInfo : '';
    const password = this.passwordInput?.InputInfo ? this.passwordInput?.InputInfo : '';

    if(password=='' || username==''){
      this.emptyCredentials = true;
    }
    else if (!/^\d{8}$/.test(username)) {
      this.invalidCredentials = true;
    } 
    else{
      this.authService.login(username, password).subscribe(response => {
        if (response.error) {
          if (response.type == 'InvalidCredentials') {
            this.errorMessage = 'Nombre de usuario y/o contraseña incorrectos.';
            this.invalidCredentials = true;
          } else {
            this.errorMessage = 'Lo sentimos no hemos podido procesar su solicitud';
          }
        } else {
          this.router.navigateByUrl('/problems');
        }
      });
    }
  }

  //TODO VALIDATORS
}
