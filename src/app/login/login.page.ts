import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginService } from '../services/auth-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formularioLogin: FormGroup;

  users = [
    {email:"admin@admin.com" , password:"111111"},
    {email:"invitado@invitado.com" , password:"222222"},
    {email:"usuario@usuario.com" , password:"333333"}
  ]
  constructor(public formBuilder: FormBuilder, private router: Router , private authService: AuthLoginService) 
  {
    this.formularioLogin = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]) 
    })
  }

  login()
  {
    this.authService.loguear(
      this.formularioLogin.get('email')?.value!,
      this.formularioLogin.get('password')?.value
    )
    .then(()=>{
      this.router.navigate(['home'])
    })
    .catch(()=>{
      console.log();
    })
  }

  hardcode(i:number)
  {
    this.formularioLogin.get('email')?.setValue(this.users[i].email);
    this.formularioLogin.get('password')?.setValue(this.users[i].password);
  }


}
