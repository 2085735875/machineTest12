import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IcanDeactivateComp } from 'src/app/shared/models/product';
import { Iuser } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, IcanDeactivateComp {

  userId !: string;
  userObj !: Iuser;
  userForm !: FormGroup;
  isinEditMode : boolean = false;
  isinEditMode2 : boolean = false;
  constructor(
    private _routes: ActivatedRoute,
    private _userService : UsersService,
    private _router : Router,
    private _uuidServic : UuidService
  ) { }

  ngOnInit(): void {
    this.createUserForm()
    this.userId = this._routes.snapshot.params['userId'];
    if(this.userId){
      this.isinEditMode = true;
      this.userObj = this._userService.fetchUser(this.userId);
      this.userForm.patchValue(this.userObj)
      this._routes.queryParams
        .subscribe(res => {
          if(res['userRole'] == 'Player'){
            this.userForm.disable();
           this.isinEditMode2 = false
          }
          else{
            this.userForm.enable();
            this.isinEditMode2 = true
          }
        })
    }else{
      this.isinEditMode = false
    }
  }

  createUserForm(){
    this.userForm = new FormGroup({
      userName : new FormControl(null, [Validators.required]),
      url : new FormControl(null, [Validators.required]),
      profession : new FormControl(null, [Validators.required]),
      userRole : new FormControl(null, [Validators.required])
    })
  }

  onUserUpdate(){
    if(this.userForm.valid){
      let updateObj : Iuser = {...this.userForm.value, userId : this.userId}
      this._userService.updateUser(updateObj)
      this._router.navigate(['/users'])
    }
  }

  onUserAdd(){
    if(this.userForm.valid){
      let obj : Iuser = {...this.userForm.value, userId : this._uuidServic.uuid()}
      this._userService.addUser(obj)
      this._router.navigate(['/users'])
    }
  }

  canDeactive(){
    if(this.userForm.dirty){
      return confirm('Are you sure do you want to discard this changes?')
    }
    return true
  }

}
