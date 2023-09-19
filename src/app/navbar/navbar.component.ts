import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-navbar',

  // template: `<h1>
  //   This is Navbar 
  //   <span>Component</span>
  // </h1>`,
  
  // styles: [`h1 {
  //           color: blue
  //         }`, `h1 span {
  //           color: orange
  //         }`]

  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // providers: [PostService]
})

export class NavbarComponent {
  posts: Array<any> = [];
  users: Array<any> = [];

  // We have used Dependency Injection Way
  constructor(private postService: PostService, private userService: UserService) {
    // let postService = new PostService();  (Old Traditional Way without Dependency Injection)
    this.posts = postService.posts;
    this.users = userService.users;
  }
}