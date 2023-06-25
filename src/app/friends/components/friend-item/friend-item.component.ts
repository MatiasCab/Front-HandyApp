import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { User } from 'src/app/core/models/User';
import { FriendsService } from '../../services/friends.service';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.scss']
})
export class FriendItemComponent {

  @Input() user?: User;
  joinedDateString: string = "";

  botonText: string = "";
  modaltitle: string = "";
  modaltext: string = "";
  modalbutton: string = "";
  modelSelectedId: string = "";

  //var myModal = new bootstrap.Modal(document.getElementById('friendsModal'))
  //myModal.show()

  constructor(
    private Router: Router,
    private friendsService: FriendsService
  ) { }

  convertDateToString(date: Date): string {
    const months: string[] = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
  
    const month: string = months[date.getMonth()];
    const year: number = date.getFullYear();
  
    return `Miembro desde ${month} ${year}`;
  }

  ngOnInit(): void {
    console.log("USUARIO", this.user?.firstname, this.user?.id);
    var datee = new Date(this.user!.singupDate!);
    this.joinedDateString = this.convertDateToString(datee);
    console.log(this.user);
    if(this.user!.friendshipStatus == 0){
      this.botonText = "Agregar amigo";
    }else if(this.user!.friendshipStatus == 1){
      this.botonText = "Eliminar amigo";
    }else if(this.user!.friendshipStatus == 2){
      this.botonText = "Responder solicitud";
    }else if(this.user!.friendshipStatus == 3){
      this.botonText = "Cancelar solicitud";
    }
  }


  showprofile(){
    this.Router.navigate(['/profile/' + this.user!.id]);
  }

  showproblems(){
    this.Router.navigate(['/problems']);
  }

  buttonModal(){
    if(this.user!.friendshipStatus == 0){
      this.modaltitle = "Agregar amigo";
      this.modaltext = "¿Estás seguro de que quieres agregar a " + this.user!.firstname + " " + this.user!.lastname + " como amigo?";
      this.modalbutton = "Agregar amigo";
    }else if(this.user!.friendshipStatus == 1){
      console.log("entre");
      this.modaltitle = "Eliminar amigo";
      this.modaltext = "¿Estás seguro de que quieres eliminar a " + this.user!.firstname + " " + this.user!.lastname + " de tus amigos?";
      this.modalbutton = "Eliminar amigo";
    }else if(this.user!.friendshipStatus == 2){
      this.modaltitle = "Responder solicitud";
      this.modaltext = "¿Estás seguro de que quieres agregar a " + this.user!.firstname + " " + this.user!.lastname + " como amigo?";
      this.modalbutton = "Aceptar solicitud";
    }else if(this.user!.friendshipStatus == 3){
      this.modaltitle = "Cancelar solicitud";
      this.modaltext = "¿Estás seguro de que quieres cancelar la solicitud de amistad a " + this.user!.firstname + " " + this.user!.lastname + "?";
      this.modalbutton = "Cancelar solicitud";
    }

    var modalTitle = document.getElementById('changeModalLabel');
    var modalBody = document.getElementById('modaltext');
    var modalButton = document.getElementById('modalbutton');
    modalTitle!.textContent = this.modaltitle;
    modalBody!.textContent = this.modaltext;
    modalButton!.textContent = this.modalbutton;
    var modal = new bootstrap.Modal(document.getElementById(this.user!.id!.toString())!);
    modal.show();
  }

  buttonFriends(){
    console.log("SOLICITUD", this.user?.firstname, this.user?.id);
    if(this.user!.friendshipStatus == 0){
      //llamada a la api para solicitar amistad
      this.friendsService.requestFriend(this.user!.id!.toString()).subscribe();
    }else if(this.user!.friendshipStatus == 1){
      //llamada a la api para eliminar amigo
      this.friendsService.deleteFriend(this.user!.id!.toString()).subscribe();
    }else if(this.user!.friendshipStatus == 2){
      //llamada a la api para aceptar solicitud
      this.friendsService.acceptFriend(this.user!.id!.toString()).subscribe();
    }else if(this.user!.friendshipStatus == 3){
      this.friendsService.deleteFriend(this.user!.id!.toString()).subscribe();
    }

    //recarga la pagina
    const currentUrl = this.Router.url;
    this.Router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      console.log(decodeURI(currentUrl));
      this.Router.navigate([currentUrl]);
    });
  }
}
