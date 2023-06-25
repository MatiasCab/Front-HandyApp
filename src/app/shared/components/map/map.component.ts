import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  ngOnInit() {
    this.initMap();
  }

  markerLat?: number
  markerLng?: number
  googleMapKey: string = environment.googleApiKey;

  initMap() {
    const myLatLng = { lat: -34.882764, lng: -56.169615 };
    this.markerLat = myLatLng.lat;
    this.markerLng = myLatLng.lng;
  
    const mapElement = document.getElementById('map');
    if (mapElement) {
      const map = new google.maps.Map(mapElement, {
        center: myLatLng,
        zoom: 10,
        mapTypeControlOptions: {
          mapTypeIds: []
        },
        streetViewControl: false
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
      this.markerLat = latLng.lat();
      this.markerLng = latLng.lng();
    }

} 