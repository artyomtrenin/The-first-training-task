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

  submitted = false;

  minDate = new Date(1910, 1, 1);
  maxDate = new Date();

  jobPlaces: string[] = [
    'Google',
    'Yandex',
    'Amazon',
    'Apple'
  ];

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
      birthDay: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.email]],
      jobPlace: ''
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

  submitForm(): void {
    // this.submitted = true;
    // console.log(this.myForm);
    //console.log(this.myForm.get('name.firstName')?.errors);
  }

  get _firstName(): AbstractControl | null {
    return this.myForm.get('name.firstName');
  }

  get _lastName(): AbstractControl | null {
    return this.myForm.get('name.lastName');
  }

  get _thirdName(): AbstractControl | null {
    return this.myForm.get('name.thirdName');
  }

  get _birthDay(): AbstractControl | null {
    return this.myForm.get('birthDay');
  }

  get _sex(): AbstractControl | null {
    return this.myForm.get('sex');
  }

  get _phoneNumber(): AbstractControl | null {
    return this.myForm.get('phoneNumber');
  }

  get _email(): AbstractControl | null {
    return this.myForm.get('email');
  }
}
