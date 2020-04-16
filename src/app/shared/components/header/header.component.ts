import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import { Subscription } from "rxjs";

import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userAuthenticated = false;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService) {}

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userAuthenticated = isAuthenticated;
      });
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
  

  onLogout() {
    this.authService.logout();
  }
}
