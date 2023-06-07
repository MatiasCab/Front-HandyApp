import { Component, OnInit, ViewChild } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendcode() {
    let email = this.emailInput?.InputInfo ? this.emailInput?.InputInfo : '';

    /*
    this.authService.sendemailcode(email).subscribe(response => {
      if (response.error) {
          this.errorMessage = 'Lo sentimos no hemos podido procesar su solicitud';
        }
      } else {

        //CÓDIGO ENVIADO JEJE
        //Ahora se bloquea el email, para que no lo cambie y poder verificar el mail con el código
        // es anecdotico esto? no lo sabemos

        //this.router.navigateByUrl('/home');
      }
    });
    */
  }

  checkcode() {
    let email = this.emailInput?.InputInfo ? this.emailInput?.InputInfo : '';
    let code = this.codeInput?.InputInfo ? this.codeInput?.InputInfo : '';
    this.router.navigateByUrl('/changepassword');

    /*
    this.authService.verifycode(email, code).subscribe(response => {
      if (response.error) {
          this.errorMessage = 'Lo sentimos no hemos podido procesar su solicitud';
        }
      } else {
        //this.router.navigateByUrl('/home');
      }
    });
    */
  }
}
