import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule   } from '@angular/forms';
import { SaveService } from '../shared/services/save.service'
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule  } from '@angular/http';
import {TranslateModule} from 'ng2-translate';

import { AppComponent } from './app.component';

import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { DropdownComponent } from '../shared/component/dropdown/dropdown.component';
import { KeyPipe } from '../shared/pipes/objecttoarray/key.pipe';
import { ImputNameDirective } from '../shared/directives/imput-name.directive';
import { ButtonActionDirective } from '../shared/directives/button-action.directive';


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    KeyPipe,
    ImputNameDirective,
    ButtonActionDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    DropdownModule.forRoot()
  ],
  providers: [SaveService],
  exports: [
    FormsModule,
    RouterModule,
    HttpModule,
    TranslateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
