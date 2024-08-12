import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
prodId !: string;
prodObj !: Iproduct
  constructor(
    private _routes : ActivatedRoute,
    private _productService : ProductsService,
    private _router : Router
  ) { 
    // this._routes.data
    //     .subscribe(res => {
    //       this.prodObj = res['product']
    //     })
  }

  ngOnInit(): void {

    this._routes.params
        .subscribe(res => {
          this.prodId = res['prodId'];
          this.prodObj = this._productService.fetchProduct(this.prodId)
        })
  }

  onProductRemove(){
    this._productService.removeProduct(this.prodId);
    this._router.navigate(['/products'])
  }

}
