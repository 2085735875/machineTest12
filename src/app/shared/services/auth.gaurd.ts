import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable({
    providedIn : 'root'
})
export class AuthGaurd implements CanActivate{

    constructor(
        private _authServoce : AuthService
    ) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this._authServoce.isAuthenticated()
                .then(res => {
                    if(res === true){
                        return true
                    }
                    else{
                        return false
                    }
                })
    }
}