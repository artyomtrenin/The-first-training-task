import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  buyTicketForm!: FormGroup;
  obs!: Observable<any>;

  constructor(private fb: FormBuilder) {
    this._createForm();
  }

  private _createForm(): void {
    this.buyTicketForm = this.fb.group({
      passenger: '',
      passengerAge: '',

      passengerContacts: this.fb.group({
        telegram: '',
        whatsapp: ''
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
    console.log(this.buyTicketForm.get('passengerContacts.whatsapp')?.status);
    // this.buyTicketForm.patchValue({passenger: 'Тренин Артем'});
  }

  ngOnInit(): void {
  }

}
