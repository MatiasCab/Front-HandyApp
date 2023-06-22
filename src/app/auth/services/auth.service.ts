import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/core/const';
import { catchError, map, of, tap } from 'rxjs';
import { signUpInfo } from 'src/app/core/models/signUpInfo';

import * as moment from "moment";

const API_AUTH_URL = `${API_URL}/auth`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(cedula: string, password: string) {
    return this.http.post<any>(`${API_AUTH_URL}/login`, { cedula, password }).pipe(
      tap(res => this.setSession(res)),
      map(_res => { return { error: false, type: 'success' } }),
      catchError(this.handleError<any>('login'))
    );
  }

  signup(signUpInfo: signUpInfo) {
    return this.http.post<any>(`${API_AUTH_URL}/signup`, signUpInfo).pipe(
      catchError(this.handleError<any>('signup'))
    );
  }

  /*
  sendemailcode(email: string) {
    return this.http.post<any>(`${API_AUTH_URL}/sendemailcode`, email).pipe(
      catchError(this.handleError<any>('signup'))
    );
  }
  */


  verifycode(email: string, verificationCode: string) {
    return this.http.post<any>(`${API_AUTH_URL}/verify`, {email, verificationCode}).pipe(
      catchError(this.handleError<any>('signup'))
    );
  }

  setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem("user_ID", authResult.userID);
  }


  /// TOTALMENTE INSEGURO JASJDASJDASJDJ
  /*
  changepass(cedula: string, password: string) {
    return this.http.post<any>(`${API_AUTH_URL}/changepassword`, {cedula,password}).pipe(
      catchError(this.handleError<any>('signup'))
    );
  }
  */

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

