import { Component, OnInit, ViewChild } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigateByUrl('/login');
  }

  changepass() {
    //TODO COMPARAR CONTRASEÑAS (MENSAJE DE ERROR)
    let password = this.pass1Input?.InputInfo ? this.pass1Input?.InputInfo : '';
    let password2 = this.pass2Input?.InputInfo ? this.pass2Input?.InputInfo : '';

    if(password == password2){
      this.authService.changepass(password).subscribe(response => {
        if (response.error) {
            this.errorMessage = 'Lo sentimos no hemos podido procesar su solicitud';
          } else {
          this.router.navigateByUrl('/login');
        }
      });
    }
  }

}
