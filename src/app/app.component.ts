import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isLogin : boolean = false;
  title = 'machineTest12';
  constructor(
    private _authService : AuthService
  ) {
      this._authService.loginSub$
          .subscribe(res => this.isLogin = res)
  }
  ngOnInit(): void {
    this._authService.loginSub$
        .subscribe(res => this.isLogin = res)
  }
  
}
