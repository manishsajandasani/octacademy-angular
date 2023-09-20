import { Component, ViewChild, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { PostComponent } from './post/post.component';
import { NgForm, NgModel } from '@angular/forms';

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

  // ===========================================================================================
  // ===========================================================================================

  /* @ViewChild Decorator + Child to Parent Message */

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

  // ===========================================================================================
  // ===========================================================================================
  
  /* Binding : Property + Class */
  imgUrl: string = "https://ps.w.org/url-shortify/assets/icon-256x256.png?rev=2304705";
  textRedBool: boolean = true;

  /* Event Binding + Filtering + Template Variable + One Way vs. Two Way Data Binding */
  clickMe() {
    console.log("Event Binding Clicked");
  }

  onKeyUp1($event:any) {
    if ($event.keyCode === 13) {
      console.log("Without Event Filtering: " + $event.keyCode);
    }
  }

  onKeyUp2() {
    console.log("Key Pressed");
  }

  onKeyUp3(username:any) {
    console.log(username);    
  }

  onKeyUp4() {
    console.log(this.userName);    
  }

  onKeyUp5() {
    console.log(this.userText);    
  }
  
  onKeyUp6() {
    console.log(this.userText2);    
  }

  // ===========================================================================================
  // ===========================================================================================

  /* Data Binding Task */
  textTitle: string = "";
  textDetails: string = "";
  taskImgUrl: string = "";
  taskWebUrl: string = "";
  isChecked: boolean = false;  

  // ===========================================================================================
  // ===========================================================================================

  /* Task Data Binding + Directives */
  directiveName: string = "";
  directiveEmail: string = "";
  directiveAddress: string = "";
  directiveArray: Array<any> = [];

  saveDirectiveData() {
    this.directiveArray.push({
      name: this.directiveName,
      email: this.directiveEmail,
      address: this.directiveAddress,
    });
  }
  delDirectiveArrayObj(index: number) {
    this.directiveArray.splice(index, 1);
  }

  // ===========================================================================================
  // ===========================================================================================

  /* Angular Pipes */
  pipeTitle: string = "Angular Tutorial";
  pipeNumber: number = 154652565;
  pipeDecimal: number = 6.23564895;
  pipeCurrency: number = 9.995689;
  pipeDate: Date  = new Date();
  pipeJson: any = {
    id: 1,
    postTitle: 'Post One'
  };
  pipePercent: number = 0.567;
  pipeSlice: Array<string> = [
    "post 1", "post 2", "post 3", "post 4", "post 5", "post 6"
  ];
  pipeCustomString: string = "Hello World. I am Manish Sajandasani. I am a FullStack Developer. I work at Sagar Group. I am married.";
  
  // ===========================================================================================
  // ===========================================================================================
  
  /* Directives */
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

  isStyleActive: boolean = true;
  switchCaseState: string = "step 2";
  switchCaseStatus: string = "Default";
  switchFunc(status: any) {
    this.switchCaseStatus = status;
  }

  // ===========================================================================================
  // ===========================================================================================

  /* Template Driver Forms */
  /* Must Import FormsModule in the app.module.ts file */
  templateDrivenFormSubmit(f: NgForm) {
    console.log(f);    
  }
  getValue(value: NgModel) {
    console.log(value);
  }
  // ===========================================================================================
  // ===========================================================================================
}
