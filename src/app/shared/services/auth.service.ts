import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoginState : boolean = false;
  loginSub$ : Subject<boolean> = new Subject<boolean>()
  constructor(
    private _router : Router
  ) { }

  onAppLogin(email :  string ,password : string){

    if(email === 'buyer1@gmail.com' && password === 'Pass@123'){
      localStorage.setItem("tokenValue", "JWT Token");
      localStorage.setItem("userRole", "buyer")
      this.userLoginState = true;
      this.loginSub$.next(this.userLoginState)
      this._router.navigate(['/home'])
    }
    else if(email === 'admin1@gmail.com' && password === 'Pass@123'){
      localStorage.setItem("tokenValue", "JWT Token");
      localStorage.setItem("userRole", "admin")
      this.userLoginState = true;
      this.loginSub$.next(this.userLoginState)
      this._router.navigate(['/home'])
    }
    else if(email === 'superadmin1@gmail.com' && password === 'Pass@123'){
      localStorage.setItem("tokenValue", "JWT Token");
      localStorage.setItem("userRole", "superAdmin")
      this.userLoginState = true;
      this.loginSub$.next(this.userLoginState)
      this._router.navigate(['/home'])
    }
    else{
      alert('Invalid username or password !!!')
    }
  }

  onAppLogout(){
    this.userLoginState = false;
    this._router.navigate(['/'])
    localStorage.removeItem("tokenValue");
    localStorage.removeItem("userRole");
    this.loginSub$.next(this.userLoginState)
  }

  isAuthenticated(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(localStorage.getItem("tokenValue")){
          this.userLoginState = true;
          this.loginSub$.next(this.userLoginState)
        }else{
          this.userLoginState = false;
          this.loginSub$.next(this.userLoginState)
          this._router.navigate(['/']);
        }
        this.loginSub$.next(this.userLoginState)
        resolve(this.userLoginState)
      }, 100)
    })
  }
}
