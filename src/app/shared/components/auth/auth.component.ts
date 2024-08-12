import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm !: FormGroup;
  constructor(
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  onLogin(){
   if(this.loginForm.valid){
    let loginCredin = this.loginForm.value;
    this._authService.onAppLogin(loginCredin.email, loginCredin.password)
   }
  }

  createLoginForm(){
    this.loginForm = new FormGroup({
      email : new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required])
    })
  }

}
