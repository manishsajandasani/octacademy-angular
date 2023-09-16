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
  userName: string = "";
  userText: string = "I am Manish";
  userText2: string = "I am Rahul";

  @ViewChild(PostComponent) postChildMessage: any;

  // Property Binding
  imgUrl: string = "https://ps.w.org/url-shortify/assets/icon-256x256.png?rev=2304705";

  // Class Binding
  textRedBool: boolean = true;

  // Event Binding
  clickMe() {
    console.log("Event Binding Clicked");
  }
  
  // Without Angular Event Filtering
  onKeyUp1($event:any) {
    if ($event.keyCode === 13) {
      console.log("Without Event Filtering: " + $event.keyCode);
    }
  }

  // Angular Event Filtering
  onKeyUp2() {
    console.log("Key Pressed");
  }

  // Template Variable
  onKeyUp3(username:any) {
    console.log(username);    
  }

  // Two Way Data Binding
  onKeyUp4() {
    console.log(this.userName);    
  }

  // One Way vs. Two Way Data Binding
  onKeyUp5() {
    console.log(this.userText);    
  }
  onKeyUp6() {
    console.log(this.userText2);    
  }

  // Data Binding Task
  textTitle: string = "";
  textDetails: string = "";
  taskImgUrl: string = "";
  taskWebUrl: string = "";
  isChecked: boolean = false;
  
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
