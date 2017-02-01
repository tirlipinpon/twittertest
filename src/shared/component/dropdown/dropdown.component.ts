import { Component, OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor(private translate: TranslateService) { }
    dropdownValues = {'fr':'', 'en':''};

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

  changeLangue(langue: string) {
    this.translate.setDefaultLang(langue);
    // console.log( this.translate.getDefaultLang() );
  }


}
