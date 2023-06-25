import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/core/const';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Review } from 'src/app/core/models/Review';
import { Reviews } from 'src/app/core/models/Reviews';

const API_AUTH_URL = `${API_URL}/users`;

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(
    private http: HttpClient
  ) { }


  getReviews(id:string) {
    return this.http.get<any>(`${API_AUTH_URL}/${id}/reviews`).pipe(
      catchError(this.handleError<any>('getReviews'))
    );
  }

  getProfile(id: string) {
    return this.http.get<any>(`${API_AUTH_URL}/${id}`).pipe(
      catchError(this.handleError<any>('getProfile'))
    );
  }

  //FIXME HANDLER ERROS RESPONSE
  private handleError<T>(operation: String) {
    return (error: any) => {
      console.log(error);
      console.error(`${operation} failed: ${error.error.message}`);
      if (error.error.name == 'CredentialsAlredyExistsError') {
        return of({ error: true, type: 'RepitedCredentials' });
      } else if (error.error.name == 'InvalidUsernameOrPassword') {
        return of({ error: true, type: 'InvalidCredentials' });
      } else if (error.error.name == 'InvalidVerificationCode') {
        return of({ error: true, type: 'InvalidCode' })
      } else {
        return of({ error: true, type: 'Server' });
      }
    };
  }
}
