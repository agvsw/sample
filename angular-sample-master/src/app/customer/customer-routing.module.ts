import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './list/customer-list.component';
import { CreateCustomerComponent } from './create-customer.component';
import { Routes, RouterModule } from '@angular/router';

const customerRoutes: Routes = [
  { path: '',  component: CustomerListComponent },
  { path: 'create', component: CreateCustomerComponent},
  { path: 'list',  component: CustomerListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(customerRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class CustomerRoutingModule { }
