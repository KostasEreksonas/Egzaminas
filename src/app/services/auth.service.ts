import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthResponseData} from '../models/auth-response-data';
import {Observable, tap, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public idToken:string|null = "";

  constructor(private http:HttpClient) {
    this.idToken = localStorage.getItem('token');
  }

  public register(email:string, password:string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA1t-ImkmdCvEnXwy4WFxZ4R9TlKnhCRoE', {
      email:email,
      password:password,
      returnSecureToken:true
    })
  }

  public login(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA1t-ImkmdCvEnXwy4WFxZ4R9TlKnhCRoE', {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(tap((response)=>{
      localStorage.setItem('token', response.idToken);
    }));
  }

  public deleteToken():Observable<void> {
    localStorage.removeItem('token');
    return of();
  }
}
