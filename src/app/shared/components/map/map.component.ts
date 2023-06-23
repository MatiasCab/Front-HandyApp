import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const myLatLng = { lat: -34.882764, lng: -56.169615 };
  
    const mapElement = document.getElementById('map');
    if (mapElement) {
      const map = new google.maps.Map(mapElement, {
        center: myLatLng,
        zoom: 10
      });

      const marker = new google.maps.Marker({
        position: myLatLng,
        map,
        title: 'Mi ubicación',
        draggable : true
      });

    //Marker draggin event
    marker.addListener('dragend', (event: any) => {
      this.handleMarkerDrag(event.latLng);
    });
  }
    }

    handleMarkerDrag(latLng: google.maps.LatLng) {
      console.log('Posición seleccionada:', latLng.lat(), latLng.lng());
      // Here goes the event logic (operations with the latLng)
    }

  } 

  
