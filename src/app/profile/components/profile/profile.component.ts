import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { User } from 'src/app/problems/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  User?: User;
  MyProfile: Boolean|false = true;
  //id?: number;
  //viewOption?: string; //['otherView', 'myView', 'myCompleteView']

  constructor(
    private ProfileService: ProfileService,
  ) {}

  ngOnInit(): void {
    this.ProfileService.getProfile().subscribe(profile => {
      this.User = profile[0];


      //Checkear si el perfil mostrado es el del usuario logueado
      // Si es mi perfil
      //this.MyProfile = true;

      //Si no es mi perfil
      // revisar si soy amigo de este perfil
      
    });
    this.MyProfile = false;
  }
}
