import { Component, OnInit, ViewChild } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';
import { signUpInfo } from 'src/app/shared/models/signUpInfo';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  @ViewChild('ci') ciInput?: UserInputComponent;
  @ViewChild('username') usernameInput?: UserInputComponent;
  @ViewChild('password') passwordInput?: UserInputComponent;
  @ViewChild('name') nameInput?: UserInputComponent;
  @ViewChild('lastname') lastnameInput?: UserInputComponent;
  @ViewChild('email') emailInput?: UserInputComponent;
  @ViewChild('birthday') birthdayInput?: UserInputComponent;

  validci : boolean = false;
  validusername : boolean = false;
  validpassword : boolean = false;
  validname : boolean = false;
  validlastname : boolean = false;
  validemail : boolean = false;

  constructor(
    //private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  validinformation() : boolean {
    if (this.validci && this.validusername && this.validpassword && this.validname && this.validlastname && this.validemail){
      return true;
    }else{
      return false;
    }
  }

  register() {
    let ci = this.ciInput?.InputInfo ? this.ciInput?.InputInfo : '';
    let username = this.usernameInput?.InputInfo ? this.usernameInput?.InputInfo : '';
    let password = this.passwordInput?.InputInfo ? this.passwordInput?.InputInfo : '';
    let name = this.nameInput?.InputInfo ? this.nameInput?.InputInfo : '';
    let lastname = this.lastnameInput?.InputInfo ? this.lastnameInput?.InputInfo : '';
    let email = this.emailInput?.InputInfo ? this.emailInput?.InputInfo : '';
    let birthday = this.birthdayInput?.InputInfo ? this.birthdayInput?.InputInfo : '';

    if (this.validinformation()){
      const user: signUpInfo = {
        CI : ci,
        username : username,
        password : password,
        name : name,
        lastname : lastname,
        email : email,
        birthday : birthday
      };

      console.log(user)

      /*
      this.authService.signup(user).subscribe(res => {
        if (res.error) {
          if (res.type == 'RepitedCredentials') {
            this.errorMessage = 'El nombre de usuario o email ya se encuentran en nuestra base de datos.';
          } else {
            this.errorMessage = 'Lo sentimos, no hemos podido procesar su solicitud.';
          }
        } else {
          //this.openVerifyCodeModal();
        }
      });
      */
    }else{
      // error invalid information.
    }
  }

  checkCI(event: any) {
    let ci = this.ciInput?.InputInfo ? this.ciInput?.InputInfo : '';
    let cistr = ci.toString();
    if (cistr == "" || cistr.length != 8) {
      console.log('No es un numero');
    }else{
      console.log('Es un numero');
    }
  }

  checkUsername(event:any) {
    let username = this.usernameInput?.InputInfo ? this.usernameInput?.InputInfo : '';
    let usernamelower = username.toLowerCase();

    let result = !/\s/.test(usernamelower);
    let result2 = !/[^a-z]/.test(usernamelower)
    if (result && result2){
      // valid mail
      console.log("valid")
    }else{
      // invalid mail
      console.log("invalid")
    }
  }

  checkPassword() {
    let password = this.passwordInput?.InputInfo ? this.passwordInput?.InputInfo : '';
  }

  checkName() {
    let name = this.nameInput?.InputInfo ? this.nameInput?.InputInfo : '';
  }

  checkLastname() {
    let lastname = this.lastnameInput?.InputInfo ? this.lastnameInput?.InputInfo : '';
  }

  checkEmail(event: any) {
    let email = this.emailInput?.InputInfo ? this.emailInput?.InputInfo : '';
    const expression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

    const result: boolean = expression.test(email);

    if (result){
      // valid mail
    }else{
      // invalid mail
    }
  }

}