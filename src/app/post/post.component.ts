import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
  
export class PostComponent implements OnInit {
  title: string = "List of Posts";
  @Input() fromParent: string = "";

  messageFromChildPost: string = "Post Child Says Hi...";
  messageFromChildPostViaOutput: string = "Post Child Message via Output Decorator";

  postArray: Array<string> = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5"];

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}
  ngOnInit() : void {
    console.log("Loaded");  
  }

  sendMsgToParent() {
    console.log("Clicked");
    this.messageEvent.emit(this.messageFromChildPostViaOutput);
  }
}
