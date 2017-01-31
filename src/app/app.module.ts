import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule   } from '@angular/forms';
import { SaveService } from '../shared/services/save.service'
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule  } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule,
    ReactiveFormsModule 
  ],
  providers: [SaveService],
  bootstrap: [AppComponent],
  exports: [
    FormsModule,
    RouterModule,
    HttpModule
  ]
})
export class AppModule { }
