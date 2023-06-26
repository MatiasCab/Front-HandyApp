import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from 'src/app/profile/services/profile.service';

import { UserInputComponent } from '../user-input/user-input.component';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  @ViewChild('username') usernameInput?: UserInputComponent;
  @ViewChild('password') passwordInput?: UserInputComponent;
  errorMessage?: string;
  User?: User;

  constructor(
    private authService: AuthService,
    private router: Router,
    private ProfileService: ProfileService
  ) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigateByUrl('/signup');
  }

  forgotpass() {
    this.router.navigateByUrl('/recoverpassword');
  }

  login() {
    let username = this.usernameInput?.InputInfo ? this.usernameInput?.InputInfo : '';
    const password = this.passwordInput?.InputInfo ? this.passwordInput?.InputInfo : '';

    this.authService.login(username, password).subscribe(response => {
      if (response.error) {
        if (response.type == 'InvalidCredentials') {
          this.errorMessage = 'Nombre de usuario y/o contraseña incorrectos.';
        } else {
          this.errorMessage = 'Lo sentimos no hemos podido procesar su solicitud';
        }
      } else {
        var userid = localStorage.getItem('user_ID');
        this.ProfileService.getProfile(userid!).subscribe(response => {
          this.User = response["user"];
          console.log(this.User!)
          if(this.User?.lat === undefined || this.User?.lng === undefined){
            this.router.navigateByUrl('/addlocation');
          }else{
            this.router.navigateByUrl('/problems');
          }
        });
      }
    });
  }

  //TODO VALIDATORS
}
