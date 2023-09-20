import { Injectable } from "@angular/core";

@Injectable({
  providedIn : "root"
})

export class PostService {  
  posts: Array<any> = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
    { id: 4, title: "Post 4" },
    { id: 5, title: "Post 5" },
  ];
}