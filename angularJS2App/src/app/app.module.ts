import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial.component';
import { ChildAComponent } from './childA.component';
import { ChildBComponent } from './childB.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    ChildAComponent,
    ChildBComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
