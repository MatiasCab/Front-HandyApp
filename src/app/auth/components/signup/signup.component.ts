import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';
import { AuthService } from '../../services/auth.service';
import { signUpInfo } from 'src/app/core/models/signUpInfo';
import { Router } from '@angular/router';

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
  @ViewChild('referredCode') referredCodeInput?: UserInputComponent;

  validci : boolean = false;
  validusername : boolean = false;
  validpassword : boolean = false;
  validname : boolean = false;
  validlastname : boolean = false;
  validemail : boolean = false;
  validbirthday : boolean = false;
  errorMessage?: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  validInformation() : boolean { //Camel case
    if ( true ||this.validci && this.validusername && this.validpassword && this.validname && this.validlastname && this.validemail && this.validbirthday){
      return true;
    }else{
      return false;
    }
  }

  register() {
    if(this.validInformation() == true){
    let ci = this.ciInput?.InputInfo ? +this.ciInput?.InputInfo : +'';
    let username = this.usernameInput?.InputInfo ? this.usernameInput?.InputInfo : '';
    let password = this.passwordInput?.InputInfo ? this.passwordInput?.InputInfo : '';
    let name = this.nameInput?.InputInfo ? this.nameInput?.InputInfo : '';
    let lastname = this.lastnameInput?.InputInfo ? this.lastnameInput?.InputInfo : '';
    let email = this.emailInput?.InputInfo ? this.emailInput?.InputInfo : '';
    let birthday = this.birthdayInput?.InputInfo ? this.birthdayInput?.InputInfo : '';
    let referredCode = this.referredCodeInput?.InputInfo ? +this.referredCodeInput?.InputInfo : +'';

      const user: signUpInfo = {
        CI: ci,
        username: username,
        password: password,
        name: name,
        lastname: lastname,
        email: email,
        birthdate: birthday,
        referredCode: referredCode
      };

      console.log(user)

      //FIXME RESPONSE
      this.authService.signup(user).subscribe(res => {
        console.log(res);
        if (res.error) {
          if (res.type == 'RepitedCredentials') {
            this.errorMessage = 'El nombre de usuario, email, o cedula ya se encuentran en nuestra base de datos.';
          } else if (res.type == 'InvalidReferralCode') {
            this.errorMessage = 'El codigo de referidos es incorrecto.';
          } else if (res.type == 'InvalidIDCardNumber') {
            this.errorMessage = 'La cedula es incorrecta.';
          } else {
            this.errorMessage = 'Lo sentimos, no hemos podido procesar su solicitud.';
          }
        } else {
          this.router.navigateByUrl('/verify');
        }
      });
    }else{
      // error invalid information.
    }
  }

  // ACA SOLO VERIFICAMOS EL LARGO DE LA CEDULA, PERO NO VERIFICAMOS QUE SEA UN NUMERO. FELICITACIONES
  checkCI() {
    let ci = this.ciInput?.InputInfo ? this.ciInput?.InputInfo : '';
    let cistr = ci.toString();
    if (cistr == "" || cistr.length <= 6 || cistr.length >= 9) {
      this.validci = false;
    }else{
      this.validci = true;
    }
  }

  // TIENE PINTA DE OK, FELICITACIONES
  checkUsername() {
    let username = this.usernameInput?.InputInfo ? this.usernameInput?.InputInfo : '';
    let usernamelower = username.toLowerCase();

    let result = !/\s/.test(usernamelower);
    let result2 = !/[^a-z]/.test(usernamelower);
    if (result || result2 || usernamelower.length < 3 || usernamelower.length > 20){
      this.validusername = false;
    }else{
      this.validusername = true;
    }
  }

  // ESTO ESTA BIEN, TIENE PINTA. FELICITACIONES
  checkPassword() {
    let password = this.passwordInput?.InputInfo ? this.passwordInput?.InputInfo : '';
    if(password.length >= 8){
      this.validpassword = true;
    }else{
      this.validpassword = false;
    }
  }

  // ESTO ESTA BIEN, FELICITACIONES
  checkName() {
    let name = this.nameInput?.InputInfo ? this.nameInput?.InputInfo : '';

    let result = !/\s/.test(name);
    let result2 = !/[^a-z]/.test(name);

    if (name == "" || name.length < 3 || name.length > 20 || !result || !result2){
      this.validname = false;
    }else{
      this.validname = true;
    }
  }

  // ESTO ESTA BIEN, FELICITACIONES
  checkLastname() {
    let lastname = this.lastnameInput?.InputInfo ? this.lastnameInput?.InputInfo : '';

    let result = !/\s/.test(lastname);
    let result2 = !/[^a-z]/.test(lastname);

    if (lastname == "" || lastname.length < 3 || lastname.length > 20 || !result || !result2){
      this.validlastname = false;
    }else{
      this.validlastname = true;
    }
  }

  // ESTO ESTA BIEN, FELICITACIONES.
  checkEmail() {
    let email = this.emailInput?.InputInfo ? this.emailInput?.InputInfo : '';
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const result: boolean = regex.test(email);

    if (result){
      this.validemail = true;
    }else{
      this.validemail = false;
    }
  }

  // ESTO ESTA BIEN, FELICITACIONES.
  checkBirthday() {
    let birthday = this.birthdayInput?.InputInfo ? this.birthdayInput?.InputInfo : '';
    var yearInp = birthday.substring(0,4);
    var date = new Date();
    var yearAct = date.getFullYear();
    var yearmin = yearAct - 18;
    var yearmax = yearAct - 100;

    if (parseInt(yearInp) < yearmax || parseInt(yearInp) > yearmin){
      this.validbirthday = false;
    }else{
      this.validbirthday = true;
    }
  }
}