import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/core/const';
import { catchError, map, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';


const API_AUTH_URL = `${API_URL}/users`;

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(
    private http: HttpClient
  ) { }


  acceptFriend(id: string) {
    return this.http.put<any>(`${API_AUTH_URL}/${id}/friend-requests/accept`, {}).pipe(
      catchError(this.handleError<any>('acceptFriendship'))
    );
  }

  requestFriend(id: string) {
    return this.http.post<any>(`${API_AUTH_URL}/${id}/friend-requests`, {}).pipe(
      catchError(this.handleError<any>('requestFriendship'))
    );
  }

  deleteFriend(id: string) {
    return this.http.delete<any>(`${API_AUTH_URL}/${id}/friends`, {}).pipe(
      catchError(this.handleError<any>('deleteFriendship'))
    );
  }

  getFriends() {
    return this.http.get<any>(`${API_AUTH_URL}?relationship=friends`).pipe(
      catchError(this.handleError<any>('getFriends'))
    );
  }

  getFriendsSearch(name: string, skills: string) {
    return this.http.get<any>(`${API_AUTH_URL}?relationship=friends${name}${skills}`).pipe(
      catchError(this.handleError<any>('getFriendsSearch'))
    );
  }

  getNotFriends() {
    return this.http.get<any>(`${API_AUTH_URL}?relationship=stranger`).pipe(
      catchError(this.handleError<any>('getFriends'))
    );
  }

  getNotFriendsSearch(name: string, skills: string) {
    return this.http.get<any>(`${API_AUTH_URL}?relationship=stranger${name}${skills}`).pipe(
      catchError(this.handleError<any>('getFriendsSearch'))
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
