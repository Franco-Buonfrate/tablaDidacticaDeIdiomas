import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  constructor(private auth:AngularFireAuth, private router:Router)
  { }

  loguear(email:string, password:string)
  {
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  logout(){
    firebase.auth().signOut().then(()=>{
      this.router.navigateByUrl('log',{replaceUrl:true});
    });
  }
}
