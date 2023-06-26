import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @Input() markerLat: number = -34.882764;
  @Input() markerLng: number = -56.169615;
  googleMapKey: string = environment.googleApiKey;

  ngAfterViewInit() {
    this.initMap();
  }

  ngOnInit() {
    this.initMap();
  }

  reload(lat: number, lng: number) {
    this.markerLat = lat;
    this.markerLng = lng;
    this.initMap();
  }

  initMap() {
    //const myLatLng = { lat: -34.882764, lng: -56.169615 };
    //this.markerLat = myLatLng.lat;
    //this.markerLng = myLatLng.lng;
  
    const mapElement = document.getElementById('map');
    if (mapElement) {
      const map = new google.maps.Map(mapElement, {
        center: { lat: this.markerLat ? this.markerLat : -34.882764, lng: this.markerLng ? this.markerLng : -56.169615},
        zoom: 10,
        mapTypeControlOptions: {
          mapTypeIds: []
        },
        streetViewControl: false
      });

      const marker = new google.maps.Marker({
        position: { lat: this.markerLat ? this.markerLat : -34.882764, lng: this.markerLng ? this.markerLng : -56.169615},
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