import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map, retry } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  public registerFlag: boolean;
  public loginFlag: boolean;

  constructor(private http: HttpClient) { }

  // Getter and Setter method on successfull register
  public setRegisterSuccess(value: boolean) {
    this.registerFlag = value;
  }

  public getRegisterSuccess(): boolean {
    return this.registerFlag;
  }

  // Getter and setter method to check whether user is logged in or not
  public setLogIn(value: boolean) {
    this.loginFlag = value;
  }

  public getLogIn(): boolean {
    return this.loginFlag;
  }

  // Method to get user register data
  public getLocalStorageData() {
    if (JSON.parse(localStorage.getItem('Register')) != null) {
      return JSON.parse(localStorage.getItem('Register'));
    } else {
      return [];
    }
  }

  // Method to get user details
  public getUserDetails() {
    if (JSON.parse(localStorage.getItem('User')) != null) {
      return JSON.parse(localStorage.getItem('User'));
    } else {
      return [];
    }
  }
}
