import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckComponent } from './check.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CheckComponent],
  exports: [CheckComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CheckModule { }
