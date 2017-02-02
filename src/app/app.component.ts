import { Component, OnInit,  OnChanges, Input, trigger, state, animate, transition, style   } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { DropdownComponent } from '../shared/component/dropdown/dropdown.component';
import { SaveService } from '../shared/services/save.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('isVisibleChanged', [
      state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
      state('false', style({ opacity: 0, transform: 'scale(0.0)'  })),
      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('900ms'))
    ])
  ]
})
export class AppComponent implements OnInit {
  nbrFolowers=0;
  registerForm: FormGroup;
  message:string;
  name: string;
  @Input() isVisible : boolean = true;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      twittName: ['', Validators.required]
    });
    this.message = "";
    this.nbrFolowers=0;
  }

  constructor(private saveService: SaveService, private formBuilder: FormBuilder) {
    this.ngOnInit();
  }

  send({ value }: { value: FormGroup }): void {
    this.saveService.getDataByName(value['twittName']).subscribe(data => {
      this.ngOnInit();
      if(!data.code) {
        this.nbrFolowers = data,
        this.name = value['twittName']
      }else if (data.code===17) {// error not found
        this.message = data.message;
      }
  

    });
  }
}

