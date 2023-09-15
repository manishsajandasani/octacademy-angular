import { Component, ViewChild, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent implements AfterViewInit {
  title = 'AngIntroOctAcademy';
  parentMessage: string = "Hii. This is App Component.";
  messageFromPost: string = "";
  messageFromPostViaOutput: string = "";

  @ViewChild(PostComponent) postChildMessage: any;
  
  /**
   * Here it prints `undefined`. But, why?
   * Because constructor function is called before the component is loaded in the browser.
   */
  constructor(private cdRef: ChangeDetectorRef) {
    console.log(this.postChildMessage);    
  }
  
  /**
   * To get the content of the PostComponent Variable we have to use one of the life cycle methods called AfterViewInit.
   * This life cycle hook method is called once the component is loaded completely in the browser. 
   */
  ngAfterViewInit() {
    console.log(this.postChildMessage);    
    console.log(this.postChildMessage.messageFromChildPost);    
    this.messageFromPost = this.postChildMessage.messageFromChildPost;
    this.cdRef.detectChanges(); 
  }

  receivedPostChildMessage($event:any) {
    console.log($event);    
    this.messageFromPostViaOutput = $event; 
  }
}
