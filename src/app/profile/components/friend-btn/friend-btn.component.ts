import { Component, Input } from '@angular/core';
import { User } from 'src/app/problems/models/User';

@Component({
  selector: 'app-friend-btn',
  templateUrl: './friend-btn.component.html',
  styleUrls: ['./friend-btn.component.scss']
})
export class FriendBtnComponent {

  @Input() User?: User;

  title: String = "Agregar amigo";
  status: number = 0; //0: no son amigos, 1: son amigos, 2: solicitud enviada, 3: solicitud recibida

  

  constructor(
  ) {}

  ngOnInit(): void {

    //Llamada al servicio para obtener el estado de la amistad

    // La llamada devuelve status: 0, 1, 2 o 3
    if (this.status == 0){
      this.title = "Agregar amigo";
    }
    else if (this.status == 1){
      this.title = "Amigos";
    }
    else if (this.status == 2){
      this.title = "Solicitud enviada";
    }
    else if (this.status == 3){
      this.title = "Aceptar solicitud";
    }
  }

removeFriend(): void{
  //Llamada al servicio para eliminar la amistad
  this.title = "Agregar amigo";
  this.status= 0;
}

addFriend(): void{
  //Llamada al servicio para enviar solicitud de amistad
  this.title = "Solicitud enviada";
  this.status= 2;
}

acceptFriend(): void{
  //Llamada al servicio para aceptar la amistad
  this.title = "Amigos";
  this.status= 1;
}

}
