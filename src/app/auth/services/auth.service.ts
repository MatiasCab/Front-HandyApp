import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUpInfo } from 'src/app/core/models/signUpInfo';
//import { API_URL } from 'src/app/core/const';
//import { SignupInfo } from 'src/app/core/models/signupInfo';

//const API_AUTH_URL = `${API_URL}/auth`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  /*
  login(cedula: string, password: string) {
    return this.http.post<any>(`${API_AUTH_URL}/login`, { cedula, password }).pipe(
      tap(res => this.setSession(res)),
      map(_res => { return { error: false, type: 'success' } }),
      catchError(this.handleError<any>('login'))
    );
  }
  */

  /*
  signup(signUpInfo: signUpInfo) {
    return this.http.post<any>(`${API_AUTH_URL}/signup`, signUpInfo).pipe(
      catchError(this.handleError<any>('signup'))
    );
  }
  */

  /*
  sendemailcode(email: string) {
    return this.http.post<any>(`${API_AUTH_URL}/sendemailcode`, email).pipe(
      catchError(this.handleError<any>('signup'))
    );
  }
  */

  /*
  verifycode(email: string, code: string) {
    return this.http.post<any>(`${API_AUTH_URL}/verifycode`, {email,code}).pipe(
      catchError(this.handleError<any>('signup'))
    );
  }
  */

  /// TOTALMENTE INSEGURO JASJDASJDASJDJ
  /*
  changepass(cedula: string, password: string) {
    return this.http.post<any>(`${API_AUTH_URL}/changepassword`, {cedula,password}).pipe(
      catchError(this.handleError<any>('signup'))
    );
  }
  */

  
}
