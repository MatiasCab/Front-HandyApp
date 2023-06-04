import { Component, OnInit, ViewChild } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';
import { AuthService } from '../../services/auth.service';

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
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  register(){
    //this.router.navigateByUrl('/register');
  }

  changepass() {

    //Username debería venir de la sesión
    let password = this.pass1Input?.InputInfo ? this.pass1Input?.InputInfo : '';
    let password2 = this.pass2Input?.InputInfo ? this.pass2Input?.InputInfo : '';

    /*this.authService.changepass(username, password).subscribe(response => {
      if (response.error) {
          this.errorMessage = 'Lo sentimos no hemos podido procesar su solicitud';
        }
      } else {
        this.router.navigateByUrl('/home');
      }
    });
    */
  }

}
