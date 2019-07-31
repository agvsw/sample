import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RupiahPipe } from './pipes/rupiah.pipe';
import { SelectComponent } from './component/customer/select.component';

@NgModule({
  declarations: [
    RupiahPipe,
    SelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RupiahPipe,
    SelectComponent
  ]
})
export class SharedModule { }
