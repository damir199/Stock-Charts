import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

   
  constructor(private http: HttpClient) {
  }
  
  getAllPosts(): Observable<IPost[]>{

  return this.http.get<IPost[]>
  ("https://jsonplaceholder.typicode.com/posts")
  
  }
}
