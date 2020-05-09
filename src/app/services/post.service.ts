import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IPost } from "../interfaces/post";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private http: HttpClient) {}

  searchOption=[]
  public postsData: IPost[] 

  getPost(id: string){
    return {...this.postsData.find(p => p.id == id)}
  }

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
  }

  filteredListOptions() {
    let posts = this.postsData;
        let filteredPostsList = [];
    
        for (let post of posts) {
            for (let options of this.searchOption) {
                if (options.title === post.title) {
                  filteredPostsList.push(post);
                }
            }
        }
        console.log(filteredPostsList);
        return filteredPostsList;
  }
}
