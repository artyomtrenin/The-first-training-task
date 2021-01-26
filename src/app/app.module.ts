import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {NgxMaskModule} from 'ngx-mask';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { CorectDialogComponent } from './corect-dialog/corect-dialog.component';
import { IncorectDialogComponent } from './incorect-dialog/incorect-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    CorectDialogComponent,
    IncorectDialogComponent
  ],
  entryComponents: [
    CorectDialogComponent,
    IncorectDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatCardModule,
    NgxMaskModule.forRoot(),
    MatDialogModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
