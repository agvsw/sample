import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test/test.component';
import { CustomerModule } from './customer/customer.module';
import { Observable } from 'rxjs';
import { LoginComponent } from './shared/component/login/login.component';
import { AuthenticationGuardService } from './shared/security/authentication-guard.service';

const routes: Routes = [
  {path:"test", component: TestComponent, canActivate: [AuthenticationGuardService]}, 
  {path: "login", component: LoginComponent},
  {path:"customer", loadChildren:'./customer/customer.module#CustomerModule', canActivate: [AuthenticationGuardService]},
  //{path:"nasabah", loadChildren:'./customer/customer.module#CustomerModule'},
  //{path:"customer", loadChildren :()=>CustomerModule},
  //{path:"nasabah", loadChildren :()=>CustomerModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
