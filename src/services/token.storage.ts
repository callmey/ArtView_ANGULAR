import { Injectable } from '@angular/core';


const TOKEN_KEY = 'Authtoken';

@Injectable()
export class TokenStorage {

  constructor() { }

  signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
  }

  /*public getDecodedToken(): string { 
    const token: string = window.sessionStorage.getItem('msal.idtoken'); 
    var decodedToken = this.jwt.decodeToken(token) return decodedToken;
 }*/

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,  token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
}