import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/core/const';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

const API_AUTH_URL = `${API_URL}/users`;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }


  getProfile(id: string) {
    return this.http.get<any>(`${API_AUTH_URL}/${id}`).pipe(
      catchError(this.handleError<any>('getProfile'))
    );
  }

  updateProfile(body: any) {
    return this.http.put<any>(`${API_AUTH_URL}/`, body).pipe(
      catchError(this.handleError<any>('updateProfile'))
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
