import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
export interface AnimalData
  {
    animalDetails: {
      age: number;
      animalName: string;
      askingPrice: number;
      description: string;
      lactationNumber: number;
      milkPerDay: number;
      weight: number;
    };
    breed: string;
    imageUrls: {
      imagesList: string[];
    };
    sellerInformation: {
      district: string;
      ownerName: string;
      phone: number;
      state: string;
      town: string;
    };
    type: string;
  };
  // export interface Root {
  //   animalDetails: AnimalDetails
  //   breed: string
  //   imageUrls: ImageUrls
  //   sellerInformation: SellerInformation
  //   type: string
  // }

  // export interface AnimalDetails {
  //   age: number
  //   animalName: string
  //   askingPrice: number
  //   description: string
  //   lactationNumber: number
  //   milkPerDay: number
  //   weight: number
  // }

  // export interface ImageUrls {
  //   imagesList: any[]
  // }

  // export interface SellerInformation {
  //   district: string
  //   ownerName: string
  //   phone: number
  //   state: string
  //   town: string
  // }

  // export interface Root {
  //   id: string
  //   imageUrls: ImageUrls
  //   breed: string
  //   age: number
  //   lactationNumber: string
  //   milkPerDay: number
  //   calf: number
  //   location: string
  // }

  // export interface ImageUrls {
  //   imagesList: any[]
  // }

export interface GetAnimalData{
  id: string;
  imageUrls: {
    imagesList: string[];
  };
  breed: string;
  age: number;
  lactationNumber: number;
  milkPerDay: number;
  calf: string;
  location: string;
}
  @Injectable({
    providedIn: 'root'
  })
export class SellerFormApiService {

// private baseUrl = 'http://localhost:8080/api/v1/ads';
private baseUrl = 'http://mrgami-env.eba-e7nbfgvg.ap-south-1.elasticbeanstalk.com/api/v1/ads';

constructor(private http: HttpClient) {}
 saveData(dat): Observable<any>{
 
  const headers = { 'content-type': 'application/json'};
  const body = dat;
console.log(dat['imageUrls']);
console.log('bodyline63',body);
  
   return this.http.post<AnimalData>(this.baseUrl+'/ad', body, {headers});
  // return this.data;
 }
 getData(): Observable<any>{
   console.log('getdata line 48',this.http.get<any>(this.baseUrl + '/all'));

   return this.http.get<any>(this.baseUrl + '/all');
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
