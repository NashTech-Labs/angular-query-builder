import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QueryBuilderModule } from 'angular2-query-builder';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    QueryBuilderModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    BrowserModule,
    MatButtonModule
  ],
})
export class AppModule {}
