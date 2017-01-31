import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { SaveService } from '../shared/services/save.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nbrFolowers: number;
  registerForm: FormGroup;
  private searchTerms = new Subject<string>();

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      twittName: ['', Validators.required]
    });
  }

  constructor(private saveService: SaveService, private formBuilder: FormBuilder) {
    this.ngOnInit();
  }

  send({ value }: { value: FormGroup }): void {
    console.log( value['twittName'] );

    // this.saveService.getData().subscribe;
    this.saveService.getDataByName(value['twittName']).subscribe(data => {
        this.nbrFolowers = data.length,
        console.log(this.nbrFolowers)
    });
  }
}

