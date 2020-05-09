import { Component, OnInit, Input, Output } from "@angular/core";
import { PostService } from "src/app/services/post.service";
import { EventEmitter } from 'events';


@Component({
  selector: "app-sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.scss"],
})
export class SalesComponent implements OnInit {
  public posts  = [];
  @Output() idEventEmitter  = new EventEmitter();

  constructor(public postService: PostService) {}

  isLoading = false;
  onSelectedOption(e) {
    this.getFilteredExpenseList();
  }
  getFilteredExpenseList() {
    if (this.postService.searchOption.length > 0)
      this.posts = this.postService.filteredListOptions();
    else {
      this.posts = this.postService.postsData;
    }
  }

  

  ngOnInit() {
  this.postService.getAllPosts().subscribe(
    posts => {
      this.posts = posts;
      this.postService.postsData = posts;
    }
    );



    
      
  }


}
