import { Component, OnInit, ViewChild } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent  implements OnInit{

  @ViewChild('email') emailInput?: UserInputComponent;
  @ViewChild('code') codeInput?: UserInputComponent;

  errorMessage?: string;
  isMobile?: boolean;

  constructor(
    //private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(){
    //this.router.navigateByUrl('/register');
  }

  sendcode() {
    let email = this.emailInput?.InputInfo ? this.emailInput?.InputInfo : '';

    /*this.authService.login(username, password).subscribe(response => {
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
    */
  }

  checkcode() {
    let code = this.codeInput?.InputInfo ? this.codeInput?.InputInfo : '';
    this.router.navigateByUrl('/changepassword');

    /*this.authService.login(username, password).subscribe(response => {
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
    */
  }
}
