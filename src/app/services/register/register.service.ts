import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from 'src/app/interfaces/register';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  createRegister(body: IRegister) {
    return this.http.post('', body)
  }
}
