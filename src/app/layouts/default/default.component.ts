import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"],
})
export class DefaultComponent implements OnInit, OnDestroy {
  private authStatusSub: Subscription;
  userAuthenticated = false;
  sideBarOpen = false;

  constructor(private authService: AuthService) {}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit(): void {
    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userAuthenticated = isAuthenticated;
    });
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
