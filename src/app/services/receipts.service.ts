import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Receipt } from "../models/receipt.model";
import { IPost } from "../interfaces/post"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})

export class ReceiptsService {
  
  constructor(private http: HttpClient) {
  }
  
  getAllPosts(): Observable<IPost[]>{

  return this.http.get<IPost[]>
  ("https://api.loyverse.com/v0.7")
  

  }

  
  
}
