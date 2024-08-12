import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IcanDeactivateComp, Iproduct } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, IcanDeactivateComp {
  prodId !: string;
prodObj !: Iproduct;
prodForm !: FormGroup;
isinEditMode :boolean = false;
isinEditMode2 :boolean = false;
  constructor(
       private _routes : ActivatedRoute,
    private _productService : ProductsService,
    private _router : Router,
    private _uuidService : UuidService
  ) { }

  ngOnInit(): void {
    this.createProductForm()
    this.prodId = this._routes.snapshot.params['prodId'];
      if(this.prodId){
        this.isinEditMode = true;
        this.prodObj = this._productService.fetchProduct(this.prodId);
        this.prodForm.patchValue(this.prodObj)
        this._routes.queryParams
        .subscribe(res => {
          if(res['canEdit'] == 0){
            this.prodForm.disable();
           this.isinEditMode2 = false
          }
          else{
            this.prodForm.enable();
            this.isinEditMode2 = true
          }
        })
      }else{
        this.isinEditMode = false;
      }
   
   
  }

  createProductForm(){
    this.prodForm = new FormGroup({
      pname : new FormControl(null, [Validators.required]),
      pstatus : new FormControl(null, [Validators.required]),
      pUrl : new FormControl(null, [Validators.required]),
      canReturn: new FormControl(null, [Validators.required])
    })
  }

  onProdUpdate(){
    if(this.prodForm.valid){
      let updateObj : Iproduct = {...this.prodForm.value, pid : this.prodId}
      this._productService.updateProduct(updateObj)
      this._router.navigate(['/products'])
    }
  }

  onProductAdd(){
    if(this.prodForm.valid){
      let obj : Iproduct = {...this.prodForm.value, pid : this._uuidService.uuid()}
      this._productService.addProduct(obj)
      this._router.navigate(['/products'])
    }
  }
  canDeactive(){
    if(this.prodForm.dirty){
      return confirm('Are you sure do you want to discard this changes?')
    }
    return true
  }

}
