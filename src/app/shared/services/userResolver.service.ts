import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Iuser } from "../models/user";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsersService } from "./users.service";

@Injectable({
    providedIn : 'root'
})
export class UserResolverService implements Resolve<Iuser> {

    constructor(
        private _userService : UsersService
    ) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iuser | Observable<Iuser> | Promise<Iuser> {
        let getId = route.params['userId'];
        return this._userService.fetchUser(getId)
    }

}