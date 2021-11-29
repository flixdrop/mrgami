import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //private baseUrl = 'http://localhost:8080/api/v1/otp/';
  private baseUrl = 'http://loginotp-env.eba-2hxmjsnv.ap-south-1.elasticbeanstalk.com/api/otp/';
  constructor(private http: HttpClient) { }
//PostRequest to generate OTP
  generateOtp(username,mobilenumber){
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify({name:username, phone:mobilenumber});
    console.log('Body',body);
    return this.http.post(this.baseUrl + 'generate', body, {headers})
     .pipe(
        catchError(this.handleError)
      );
  }

  validateOtp(username, mobilenumber, otpreceived){
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify({name:username, phone:mobilenumber, otp:otpreceived});
    console.log('Body',body);
    return this.http.post(this.baseUrl + 'validate', body, {headers})
     .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
