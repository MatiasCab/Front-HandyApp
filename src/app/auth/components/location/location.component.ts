import { Component, ViewChild } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {

  @ViewChild('location') locationInput?: UserInputComponent;

  searchlocation(): void{
    // buscar localización por el input del usuario.
    // mostrar la ubicación en el mapa.
  }

  confirmlocation(): void{
    // llamada al servicio de user para agregar localización.
    
  }
}
