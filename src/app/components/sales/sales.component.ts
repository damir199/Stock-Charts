import { Component, OnInit, Input } from "@angular/core";
import { Receipt } from "src/app/models/receipt.model";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.scss"],
})
export class SalesComponent implements OnInit {
  public posts  = [];
  constructor(public postService: PostService) {}

  ngOnInit() {

    
    this.postService.getAllPosts().subscribe(
      data => this.posts = data);
  }
}
