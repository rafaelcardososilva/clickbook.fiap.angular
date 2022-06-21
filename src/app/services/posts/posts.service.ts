import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get<IPost>("/assets/foods.json")
  }
}
