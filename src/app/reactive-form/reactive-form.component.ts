import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  buyTicketForm!: FormGroup;
  obs!: Observable<any>;

  constructor() {
    this._createForm();
  }

  private _createForm(): void {
    this.buyTicketForm = new FormGroup({
      passenger: new FormControl(null),
      passengerAge: new FormControl(5),

      passengerContacts: new FormGroup({
        telegram: new FormControl(null),
        whatsapp: new FormControl(null)
      })
    });

    this.buyTicketForm.valueChanges.subscribe(v => {
      console.log(v);
    });
  }

  clickSubmit(): void {
    // console.log('click');
    // console.log(this.buyTicketForm.getRawValue());
    console.log(this.buyTicketForm.get('passengerContacts.telegram')?.value);
  }

  ngOnInit(): void {
  }

}
