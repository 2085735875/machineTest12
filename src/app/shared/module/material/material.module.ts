import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      MatButtonModule,
      MatCardModule,
      MatDividerModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatSnackBarModule
  ],
  exports : [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
