import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { AuthInterceptor } from './interceptors/authInterceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { ErrorPageComponent } from './components/error-page/error-page.component';
//import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [],
  exports: [  ],
//   providers: [
//     {
//       provide: HTTP_INTERCEPTORS,  
//       useClass: AuthInterceptor,  
//       multi: true 
//     }
//   ]
})
export class CoreModule { }
