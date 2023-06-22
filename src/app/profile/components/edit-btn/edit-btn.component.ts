import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.scss']
})
export class EditBtnComponent {

  @Input() User?: User;
  
  constructor(
    private AuthService: AuthService,
  ) {}

  changepass(): void {
    // llamada al servicio de auth para cambiar contraseña
  }

  changedescription(): void {
    // llamada al servicio de user para cambiar descripción
  }
}
