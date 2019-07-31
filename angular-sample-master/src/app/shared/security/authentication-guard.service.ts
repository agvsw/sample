import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { query } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if(localStorage.getItem('user')){
      return true;
    }else{
      this.router.navigate(["/login"], {queryParams:{message:'harus login'}});
      return false;
    }
  }
  constructor(private router : Router) { }
}
