import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this._createForm();
  }

  private _createForm(): void {
    this.myForm = this.fb.group({
      name: this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        thirdName: ''
      }),
      birtDay: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });

    // this.buyTicketForm.valueChanges.subscribe(v => {
    //   console.log(v);
    // });
  }

  // clickSubmit(): void {
  //   // console.log('click');
  //   // console.log(this.buyTicketForm.getRawValue());
  //   console.log(this.myForm.get('passengerContacts.telegram')?.value);
  //   console.log(this.myForm.get('passenger')?.status);
  //   // this.buyTicketForm.patchValue({passenger: 'Тренин Артем'});
  // }

  ngOnInit(): void {
  }

  get _firstName(): AbstractControl | null {
    return this.myForm.get('name.firstName');
  }
}
