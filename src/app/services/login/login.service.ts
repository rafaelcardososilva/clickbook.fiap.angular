import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  createLogin(email: string, password: string) {
    return this.http.post('', {
      email, password
    })
  }
}
