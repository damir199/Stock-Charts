import { Component, OnInit, Input } from "@angular/core";
import { PostService } from "src/app/services/post.service";
//import { StoreService } from "src/app/services/store.service";


@Component({
  selector: "app-sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.scss"],
})
export class SalesComponent implements OnInit {
  public posts  = [];
  public stores = [];
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
  //this.storeService.getAllStores().subscribe(
  //data => this.stores = data);
  this.postService.getAllPosts().subscribe(
    data => this.posts = data,
    );



    
      
  }


}
