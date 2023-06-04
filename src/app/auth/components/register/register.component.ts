import { Component, OnInit, ViewChild } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  @ViewChild('username') usernameInput?: UserInputComponent;
  @ViewChild('password') passwordInput?: UserInputComponent;

  constructor(
    //private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  register() {
    let username = this.usernameInput?.InputInfo ? this.usernameInput?.InputInfo : '';
    const password = this.passwordInput?.InputInfo ? this.passwordInput?.InputInfo : '';

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