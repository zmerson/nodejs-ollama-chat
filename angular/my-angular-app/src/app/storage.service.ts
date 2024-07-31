import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  cookies: { [key: string]: string} = {};
  cache: any = {};

  constructor(private cookieService: CookieService) { }

  setStorage(name: string, answer: any){
    localStorage.setItem(name, answer);
  }
  messageCookieStore(name: string, question: string, answer: any){
    this.cookieService.set(name, question);

    this.setStorage(question, JSON.stringify(answer));
  }

  cookiesToObject():{[key: string]: string}{
    this.cookies = this.getAllCookies();
    // decode here?
    return this.cookies;
  
  }

  getStorage(question: string): any {
    return localStorage.getItem(question) ||  question + 'was not found';
  }

  setCookie(name: string, question: string, days: number) {
    this.cookieService.set(encodeURIComponent(name), encodeURIComponent(question), days);
  }

  getCookie(name: string): string {
    return this.cookieService.get(encodeURIComponent(name));
  }

  deleteCookie(name: string) {
    this.cookieService.delete(name);
  }
  getAllCookies(): any {
    return this.cookieService.getAll();
  }

}
