import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Iproduct } from "../models/product";
import { Observable } from "rxjs";
import { ProductsService } from "./products.service";


@Injectable({
    providedIn : 'root'
})
export class ProductResolverService implements Resolve<Iproduct>{

    constructor(
        private _productservice : ProductsService,
    ){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iproduct | Observable<Iproduct> | Promise<Iproduct> {
        let getId = route.params['prodId'];
        return this._productservice.fetchProduct(getId)
    }

}