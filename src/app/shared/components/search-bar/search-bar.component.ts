import { Component, OnInit, ViewChild, Output, ElementRef, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IPost } from "src/app/interfaces/post";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  
  
  filteredOptions: Observable<string[]>;
  allPosts: IPost[];
  autoCompleteList: any[]
  myControl = new FormControl();

  constructor(public postService: PostService) { }
  @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();


  ngOnInit(){
     // get all the post
     this.postService.getAllPosts().subscribe(posts => {
      this.allPosts = posts

  });

  // when user types something in input, the value changes will come through this
  this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
  })
  }

  private autoCompleteExpenseList(input) {
    let categoryList = this.filterCategoryList(input)
    this.autoCompleteList = categoryList;
}

 // this is where filtering the data happens according to you typed value
 filterCategoryList(val) {
  var categoryList = []
  if (typeof val != "string") {
      return [];
  }
  if (val === '' || val === null) {
      return [];
  }
  return val ? this.allPosts.filter(s => s.title.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.allPosts;
}

 // after you clicked an autosuggest option, this function will show the field you want to show in input
 displayFn(post: IPost) {
  let k = post ? post.title : post;
  return k;
}

filterPostList(event) {
  var posts = event.source.value;
  if (!posts) {
      this.postService.searchOption = []
  }
  else {

      this.postService.searchOption.push(posts);
      this.onSelectedOption.emit(this.postService.searchOption)
  }
  this.focusOnPlaceInput();
}

removeOption(option) {

  let index = this.postService.searchOption.indexOf(option);
  if (index >= 0)
      this.postService.searchOption.splice(index, 1);
  this.focusOnPlaceInput();

  this.onSelectedOption.emit(this.postService.searchOption)
}

    // focus the input field and remove any unwanted text.
    focusOnPlaceInput() {
      this.autocompleteInput.nativeElement.focus();
      this.autocompleteInput.nativeElement.value = '';
  }

}
