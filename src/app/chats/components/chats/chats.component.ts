import { Component } from '@angular/core';
import { Chats } from 'src/app/core/models/Chats';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent {

  //chats: any[] = [];

  chat1: Chats = {
    title: "Lavarropas roto",
    name: "Rodrigo Lopez",
    image: "https://f.fcdn.app/imgs/d212ca/www.barracaeuropa.com.uy/baeuuy/9d24/original/catalogo/Z4701Z47014/900x900/lavarropas-6-kg-tem-t0ylaf06as4701-lavarropas-6-kg-tem-t0ylaf06as4701.jpg"
  }

  chat2: Chats = {
    title: "TV sin señal",
    name: "Pepe Sanchez",
    image: "https://media.istockphoto.com/id/972185312/es/v%C3%ADdeo/tv-sin-se%C3%B1al-ruido-de-la-pantalla-de-fondo-con-rayas-de-colores-horizontales-y-verticales.jpg?s=640x640&k=20&c=VKlRCmMJtK6fgTZyhtzLEUNYoU-Ay1rsvVe1yatUjpc="
  }

  chat3: Chats = {
    title: "Caño roto",
    name: "Matias Perez",
    image: "https://media.istockphoto.com/id/500598328/photo/rusty-burst-pipe-in-baku-botanic-garden.jpg?s=612x612&w=0&k=20&c=XZIH4WL3AFNiqz7dUA66nMZyag1pfIwHsgOIPe0NnSU="
  }

  chat4: Chats = {
    title: "WIFI no funciona",
    name: "Federico Rico",
    image: "https://cdn.thewirecutter.com/wp-content/media/2022/03/wifi-router-2048px-4639.jpg"
  }

  chat5: Chats = {
    title: "Mesa rota",
    name: "Diego Perez",
    image: "https://media.istockphoto.com/id/1315219262/es/foto/mesa-da%C3%B1ada.jpg?s=612x612&w=0&k=20&c=NiJRZqdAicm6Eyo3LUWc2e2Pf5P4w6TJ2Jn-oWuX_iE="
  }

  chat6: Chats = {
    title: "Sillon roto",
    name: "Pedro Perez",
    image: "https://media.istockphoto.com/id/638821554/es/foto/sill%C3%B3n-de-cuero-grande-destruido-sobre-un-fondo-blanco.jpg?s=612x612&w=0&k=20&c=-6xf3LwzCaOkZSIrGNUZUiwG0_YmNO8Dzqw7pXhJzM0="
  }

  chat7: Chats = {
    title: "Agujero en la pared",
    name: "Agustin Mamarbachi",
    image: "https://thumbs.dreamstime.com/b/agujero-en-la-pared-124005129.jpg"
  }

  chats = [this.chat1, this.chat2, this.chat3, this.chat4, this.chat5, this.chat6, this.chat7];
  constructor() { }
}
