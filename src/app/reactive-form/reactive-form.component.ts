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

  viewForm(): void {
    console.log(this.myForm.getRawValue());
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
}
