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

  objArray: Array<{ id: number, title: string }> = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }, { id: 3, title: 'Post 3' }, { id: 4, title: 'Post 4' }, { id: 5, title: 'Post 5' },]
  
  addObjToObjArray() {
    this.objArray.push({ id: 6, title: "Post Six" });
  }

  deleteObj1(obj: any) {
    this.objArray.splice(this.objArray.indexOf(obj), 1);
  }
  deleteObj2(index: number) {
    this.objArray.splice(index, 1);
  }

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}
  ngOnInit() : void {
    console.log("Loaded");  
  }

  sendMsgToParent() {
    console.log("Clicked");
    this.messageEvent.emit(this.messageFromChildPostViaOutput);
  }

  switchCaseStatus: string = "Default";
  switchFunc(status: any) {
    this.switchCaseStatus = status;
  }
}
