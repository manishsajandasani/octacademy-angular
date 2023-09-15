import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  title = 'AngIntroOctAcademy';
  parentMessage: string = "Message from Parent: The App Component";
}
