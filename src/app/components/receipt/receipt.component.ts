import { Component, OnInit, } from '@angular/core';
import { IPost } from "src/app/interfaces/post";
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  post: IPost
  constructor(private postService: PostService) { }

  ngOnInit(){
   // this.postService

    
  }

}
