import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId !: string;
  userObj !: Iuser
  constructor(
    private _route: ActivatedRoute,
    private _userService : UsersService,
    private _router : Router
  ) {
    // this._route.data
    //     .subscribe(res => {
    //       this.userObj = res['userObj']
    //     })
   }

  ngOnInit(): void {
    this._route.params
      .subscribe(res => {
        this.userId = res['userId'];
        this.userObj = this._userService.fetchUser(this.userId)
      })
  }

  onUserRemove(){
    this._userService.removeUser(this.userId);
    this._router.navigate(['/users'])
  }

}
