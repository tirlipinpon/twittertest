import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { DropdownComponent } from '../shared/component/dropdown/dropdown.component';
import { SaveService } from '../shared/services/save.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nbrFolowers=0;
  registerForm: FormGroup;
  message:string;
  name: string;

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
    // this.saveService.getData().subscribe;
    this.saveService.getDataByName(value['twittName']).subscribe(data => {
      this.ngOnInit();
      if(!data.code) {
        this.nbrFolowers = data,
        this.name = value['twittName']
        console.log(data);
      }else if (data.code===17) {// error not found
        this.message = data.message;
      }
  

    });
  }
}

