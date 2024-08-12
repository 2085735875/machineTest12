import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {

  constructor(
    private _router : Router
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let loginUserRole = localStorage.getItem("userRole");
      let userRoleArr = route.data["userRole"];

      if(userRoleArr.includes(loginUserRole)){

        return true;
      }
      else{
        const UrlTree : UrlTree = this._router.createUrlTree(['home'])
        return UrlTree
      }
  }
  
}
