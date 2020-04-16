import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

import { AuthData } from "./auth-data.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private token: string;
  private authStatusListener = new Subject<boolean>();
  public isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  register(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.http
      .post("http://localhost:3000/api/users/register", authData)
      .subscribe((response) => {
        console.log(response);
      });
  }

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.http
      .post<{ token: string }>(
        "http://localhost:3000/api/users/login",
        authData
      )
      .subscribe((response) => {
        //creating a constant of 'token' to hold the 'token' from the response.
        const token = response.token;
        //set the 'token' of this request to the retrieved 'token' that's in the const now.
        this.token = token;
        if (token) {
          this.isAuthenticated = true;

          this.authStatusListener.next(true);
          this.router.navigate(["/"]);
        }
      });
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(["login"]);
  }
} //file end
