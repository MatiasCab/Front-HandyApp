import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInputComponent } from '../user-input/user-input.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent {

  @ViewChild('email') emailInput?: UserInputComponent;
  @ViewChild('code') codeInput?: UserInputComponent;
  errorMessage?: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  
  checkcode(): void{
    let code = this.codeInput?.InputInfo ? this.codeInput?.InputInfo : '';
    let email = this.emailInput?.InputInfo ? this.emailInput?.InputInfo : '';
    this.authService.verifycode(email, code).subscribe(res => {
      console.log(res);
      if(res.error) {
        if (res.type == 'InvalidCode') {
          this.errorMessage = 'Codigo verificador invalido.';
        } else {
          this.errorMessage = 'Lo sentimos, no hemos podido procesar su solicitud.';
        }
      } else {
        this.router.navigateByUrl('/login');
      }
    })
  }

  //TODO Validations

}
