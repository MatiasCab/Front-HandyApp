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

  areInvalidFields: boolean = false;
  invalidFields?: string 
  auxString: string[] = []
  repeatedCrendentials: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  validInformation(): boolean {
    this.auxString = []
    let CI = this.checkCI();
    let BD = this.checkBirthday();
    let Email = this.checkEmail();
    let LastName = this.checkLastname();
    let name = this.checkName();
    let pass = this.checkPassword();
    let user = this.checkUsername();
    let code = this.checkReferralCode();
    if(CI && BD && Email && LastName && name
        && pass && user && code) {
      return true; 
    }
    else{
      this.areInvalidFields=true;
      this.invalidFields = this.auxString.toString();
      return false;
    }
  }

  register() {
    if(this.validInformation()){
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
            this.repeatedCrendentials = true;
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
    }
  }

  // ACA SOLO VERIFICAMOS EL LARGO DE LA CEDULA, PERO NO VERIFICAMOS QUE SEA UN NUMERO. FELICITACIONES
  checkCI() : boolean{
    let ci = this.ciInput?.InputInfo ? this.ciInput?.InputInfo : '';
    let cistr = ci.toString();
    if (cistr == "" || cistr.length <= 6 || cistr.length >= 9) {
      this.auxString.push('Cedula')
      return false
    }else{
      return true;
    }
  }

  // TIENE PINTA DE OK, FELICITACIONES
  checkUsername(): boolean {
    let username = this.usernameInput?.InputInfo ? this.usernameInput?.InputInfo : '';
    let usernamelower = username.toLowerCase();

    let result = /\s/.test(usernamelower);
    let result2 = /[^a-z0-9]/.test(usernamelower);
    if (result || result2 || usernamelower.length < 3 || usernamelower.length > 20){
      this.auxString.push('Nombre de usuario')
      return false;
    }else{
      return true;
    }

  }

  // ESTO ESTA BIEN, TIENE PINTA. FELICITACIONES
  checkPassword() {
    let password = this.passwordInput?.InputInfo ? this.passwordInput?.InputInfo : '';
    console.log("CONTRESEÑAS", password);
    if(password.length >= 8){
      return true;
    }else{
      this.auxString.push('Contraseña')
      return false;
    }
  }

  checkReferralCode() {
    let referralCode = this.referredCodeInput?.InputInfo ? this.referredCodeInput?.InputInfo : '';
    if(referralCode.length >= 1){
      return true;
    }else{
      this.auxString.push('Código de invitación')
      return false;
    }
  }

  // ESTO ESTA BIEN, FELICITACIONES
  checkName() : boolean{
    let name = this.nameInput?.InputInfo ? this.nameInput?.InputInfo : '';

    let whiteSpaces = /\s/.test(name);
    let onlyLower = /[^a-z]/.test(name.toLowerCase());

    if (name == "" || name.length < 3 || name.length > 20 || whiteSpaces || onlyLower){
      this.auxString.push('Nombre')
      return false;
    }else{
      return true;
    }
  }

  // ESTO ESTA BIEN, FELICITACIONES
  checkLastname() {
    
    let lastname = this.lastnameInput?.InputInfo ? this.lastnameInput?.InputInfo : '';

    let result = !/\s/.test(lastname);
    let result2 = !/[^a-z]/.test(lastname.toLowerCase());

    if (lastname == "" || lastname.length < 3 || lastname.length > 20 || !result || !result2){
      this.auxString.push('Apellido')
      return false;
    }else{
      return true;
    }

  }

  // ESTO ESTA BIEN, FELICITACIONES.
  checkEmail() {
    
    let email = this.emailInput?.InputInfo ? this.emailInput?.InputInfo : '';
    console.log("npombre usuario", email);
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const result: boolean = regex.test(email);

    if (!result){
      this.auxString.push('Email')
      return false;
    }else{
      return true;
    }
  }

  // ESTO ESTA BIEN, FELICITACIONES.
  checkBirthday() {
    let birthday = this.birthdayInput?.InputInfo ? this.birthdayInput?.InputInfo : '';
    console.log("npombre usuario", birthday);
    var yearInp = birthday.substring(0,4);
    var date = new Date();
    var yearAct = date.getFullYear();
    var yearmin = yearAct - 18;
    var yearmax = yearAct - 100;

    if (parseInt(yearInp) < yearmax || parseInt(yearInp) > yearmin){
      this.auxString.push('Fecha de nacimiento')
      return false;
    }else{
      return true;
    }
  }
}