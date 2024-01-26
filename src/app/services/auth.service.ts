import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser (credential: any){
    return new Promise ((accept, reject)=> {
      if(
        credential.email == 'heider@gmail.com'
        && credential.password == '12345678'        
      ){
        accept('Login Correcto');
      }else{
        reject('Login Incorrecto');
        }
      })
  }
}
