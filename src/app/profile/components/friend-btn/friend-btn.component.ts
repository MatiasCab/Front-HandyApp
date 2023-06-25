import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { FriendsService } from 'src/app/friends/services/friends.service';

@Component({
  selector: 'app-friend-btn',
  templateUrl: './friend-btn.component.html',
  styleUrls: ['./friend-btn.component.scss']
})
export class FriendBtnComponent {

  @Input() User?: User;

  title: String = "Agregar amigo";
  status: number = 0; //0: no son amigos, 1: son amigos, 2: solicitud recibida, 3: solicitud enviada

  

  constructor(
    private friendsServices: FriendsService
  ) {}

  ngOnInit(): void {
    this.status = this.User!.friendshipStatus!;

    if (this.status == 0){
      this.title = "Agregar amigo";
    }
    else if (this.status == 1){
      this.title = "Amigos";
    }
    else if (this.status == 2){
      this.title = "Aceptar solicitud";
    }
    else if (this.status == 3){
      this.title = "Solicitud enviada";
    }
  }

  removeFriend(): void{
    //Llamada al servicio para eliminar la amistad
    this.friendsServices.deleteFriend(this.User!.id!.toString()).subscribe();
    this.title = "Agregar amigo";
    this.status= 0;
  }

  addFriend(): void{
    //Llamada al servicio para enviar solicitud de amistad
    this.friendsServices.requestFriend(this.User!.id!.toString()).subscribe();
    this.title = "Solicitud enviada";
    this.status= 3;
  }

  acceptFriend(): void{
    //Llamada al servicio para aceptar la amistad
    this.friendsServices.acceptFriend(this.User!.id!.toString()).subscribe();
    this.title = "Amigos";
    this.status= 1;
  }

}
