import { Component, ViewChild } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';
import { AuthService } from '../../services/auth.service';
import { Router } from 'express';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent {
  @ViewChild('email') emailInput?: UserInputComponent;
  @ViewChild('code') codeInput?: UserInputComponent;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  verify() {
    let email = this.emailInput?.InputInfo ? this.emailInput?.InputInfo : '';
    const code = this.codeInput?.InputInfo ? this.codeInput?.InputInfo : '';
    
    /*
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
    */
  }
}
