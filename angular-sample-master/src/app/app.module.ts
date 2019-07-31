import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test/test.component';
import { RupiahPipe } from './shared/pipes/rupiah.pipe';
import { CustomerModule } from './customer/customer.module';
import { LoginComponent } from './shared/component/login/login.component';
import { SelectComponent } from './shared/component/customer/select.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [RupiahPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
