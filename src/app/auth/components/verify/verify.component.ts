import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInputComponent } from '../user-input/user-input.component';

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
  ) { }
  
  checkcode(): void{
    let code = this.codeInput?.InputInfo ? this.codeInput?.InputInfo : '';
    let email = this.emailInput?.InputInfo ? this.emailInput?.InputInfo : '';
    this.authService.verifycode(email, code).subscribe(res => {
      console.log(res);
    })
  }

  //TODO Validations

}
