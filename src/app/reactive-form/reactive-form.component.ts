import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {IncorectDialogComponent} from '../incorect-dialog/incorect-dialog.component';
import {CorectDialogComponent} from '../corect-dialog/corect-dialog.component';
// import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})

export class ReactiveFormComponent implements OnInit {

  myForm!: FormGroup;

  // для выбора пола, иначе ошибка выводится сразу
  submitted = false;

  // ограничения для birthDay
  minDate = new Date(1910, 1, 1);
  maxDate = new Date();

  // места работы
  jobPlaces: string[] = [
    'Google',
    'Yandex',
    'Amazon',
    'Apple'
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this._createForm();
  }

 // создает форму, добавляет валидаторы
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
  }

  ngOnInit(): void {
  }

  // отправляет или не отправляет форму, также показывает диалоги
  submitForm(): void {
    this.submitted = true;
    if (this.myForm.invalid){
      this.dialog.open(IncorectDialogComponent);
    } else {
      const dialogRef = this.dialog.open(CorectDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        if (result === 'true') {
          console.log('Форма отправлена');
          console.log(this.myForm.getRawValue());
        } else {
          console.log('Отправка  отменена');
        }
      });
    }
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

  get _jobPlace(): AbstractControl | null {
    return this.myForm.get('jobPlace');
  }
}
