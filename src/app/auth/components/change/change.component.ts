import { Component, OnInit, ViewChild } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit{

  @ViewChild('password1') pass1Input?: UserInputComponent;
  @ViewChild('password2') pass2Input?: UserInputComponent;

  errorMessage?: string;
  isMobile?: boolean;

  constructor(
    //private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  register(){
    //this.router.navigateByUrl('/register');
  }

  changepass() {

    //Username debería venir de la sesión
    let password1 = this.pass1Input?.InputInfo ? this.pass1Input?.InputInfo : '';
    let password2 = this.pass2Input?.InputInfo ? this.pass2Input?.InputInfo : '';

    /*this.authService.changepass(username, password).subscribe(response => {
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
