import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { AppendPipe } from './Pipes/append.pipe';
import { AppendCLIPipe } from './Pipes/append-cli.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    AppendPipe,
    AppendCLIPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
