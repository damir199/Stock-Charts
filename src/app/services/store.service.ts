import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { IStore } from "../interfaces/store";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})

export class StoreService {
  
  constructor(private http: HttpClient) {
  }
  
  

  getAllStores(): Observable<IStore[]>{
    const headers = new HttpHeaders();
    headers.set("Authorization", "Bearer 89413ca9050744caa542006c7ffbe835");
    const params = new HttpParams();
    params.append("Authorization","89413ca9050744caa542006c7ffbe835");
  return this.http.get<IStore[]>
  ("https://api.loyverse.com/v0.7/stores?access_token=89413ca9050744caa542006c7ffbe835")
  
    
  }
  

  
  
}
