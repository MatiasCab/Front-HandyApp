import { Component, ViewChild } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';
import { MapComponent } from 'src/app/shared/components/map/map.component';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { User } from 'src/app/core/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {

  constructor(
    private profileService : ProfileService,
    private Router: Router
  ) { }

  @ViewChild (MapComponent) mapComponent!: MapComponent;
  User?: User;

  ngOnInit(): void {
    var userid = localStorage.getItem('user_ID');
    this.profileService.getProfile(userid!).subscribe(profile => {
      this.User = profile["user"];
    });
  }

  confirmlocation(): void{
    // llamada al servicio de user para agregar localización.
    let newLat = this.mapComponent.markerLat;
    let newLong = this.mapComponent.markerLng;
    let body = {
      description: this.User?.description,
      skills : this.User?.skills,
      lat: newLat,
      lng: newLong,
    }
    this.profileService.updateProfile(body).subscribe(profile => {
      this.Router.navigateByUrl('/problems');
    });
    
  }
}
