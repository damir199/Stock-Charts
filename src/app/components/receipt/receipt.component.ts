import { Component, OnInit, Input } from "@angular/core";
import { IPost } from "src/app/interfaces/post";
import { PostService } from "src/app/services/post.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-receipt",
  templateUrl: "./receipt.component.html",
  styleUrls: ["./receipt.component.scss"],
})
export class ReceiptComponent implements OnInit {
  public post: IPost;
  public postId;

  constructor(public postService: PostService, public route: ActivatedRoute) {}

  ngOnInit() {
    // this.postService
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.postId = paramMap.get("id");
      console.log(this.postId);
    });
    this.post = this.postService.getPost(this.postId);
  }
}
