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
  status: number = 0; //0: no son amigos, 1: son amigos, 2: solicitud enviada

  

  constructor(
  ) {}

  ngOnInit(): void {

    //Llamada al servicio para obtener el estado de la amistad

    //si son amigos muestra que son amigos
    //si le haces click en amigos te sale un modal para eliminar la amistad
    
    this.title = "Amigos";
    this.status= 1;

    //si no son amigos muestra el boton de agregar amigo
    //si le haces click en agregar amigo te sale un modal para agregar la amistad
    
    //this.title = "Agregar amigo";
    //this.status= 0;

    //Si ya solicitaste amistad muestra que ya solicitaste amistad
    
    //this.title = "Solicitud enviada";
    //this.status= 2;

  }

}
