import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
      passenger: ['', [Validators.required]],
      passengerAge: ['', [Validators.min(15)]],

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
    console.log(this.buyTicketForm.get('passenger')?.status);
    // this.buyTicketForm.patchValue({passenger: 'Тренин Артем'});
  }

  ngOnInit(): void {
  }

  get _passenger(): AbstractControl | null {
    return this.buyTicketForm.get('passenger');
  }

  get _age(): AbstractControl | null {
    return this.buyTicketForm.get('passengerAge');
  }
}
