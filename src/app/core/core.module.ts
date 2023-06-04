import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavComponent } from './components/side-nav/side-nav.component';
//import { AuthInterceptor } from './interceptors/authInterceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { ErrorPageComponent } from './components/error-page/error-page.component';
//import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule
  ],
  declarations: [
    SideNavComponent,
  ],
  exports: [ 
    SideNavComponent,
   ],
//   providers: [
//     {
//       provide: HTTP_INTERCEPTORS,  
//       useClass: AuthInterceptor,  
//       multi: true 
//     }
//   ]
})
export class CoreModule { }
