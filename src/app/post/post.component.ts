import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
  
export class PostComponent implements OnInit {
  title: string = "List of Posts";
  @Input() fromParent: string = "";

  messageFromChildPost: string = "Post Child Message 123";

  constructor() {}
  ngOnInit() : void {
    console.log("Loaded");  
  }
}
