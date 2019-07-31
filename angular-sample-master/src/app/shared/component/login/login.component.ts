import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../servives/authentication.service';
import { LoginData } from '../../model/login-data';
import { Customer } from '../../model/customer';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message;

  customer : Customer;

  customerFormGroup: FormGroup;

  constructor(private route : ActivatedRoute, private authService : AuthenticationService, private builder: FormBuilder) { }

  ngOnInit() {
    this.customerFormGroup = this.builder.group(
      {
        username : ['', [Validators.required, Validators.minLength(8), forbiddenNameValidator(/[1-9]/)]],
        password : ['', Validators.required],
        retypePassword : ['']
      }
    );

    this.customerFormGroup.controls['retypePassword'].setValidators(retypePasswordValidator(this.customerFormGroup.controls['password']));

    this.route.queryParams.subscribe(
      params=>{
        this.message = params['message'];
      }
    );
    if(localStorage.getItem('user')){
      this.message = `${localStorage.getItem('user')} sudah login`;
    }else{
      this.message = 'silahkan login';
    }
  }

  login(){
    const user = this.customerFormGroup.controls['username'].value;
      const pwd = this.customerFormGroup.controls['password'].value
      this.authService.login(new LoginData(user, pwd)).subscribe(
        response=>{
          if(response.responseCode!=='00'){
            alert(response.responseMessage);
          }else{
            localStorage.setItem('user', response.data.username);
            this.message = `${response.data.firstName} - ${response.data.lastName} berhasil login`;
          }
        }
      );
  }

  getErrorMessages(control : AbstractControl){
    if(!control || !control.errors){
      return '';
    }else{
      return Object.keys(control.errors)[0];
    }
  }

}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

export function retypePasswordValidator(pwdControl : AbstractControl): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const match = control.value !== pwdControl.value
    return match ? {'retypePassword': {value: 'password doesnt match'}} : null;
  };
}