import { Component } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private authService:AuthentificationService,private rourer:Router){}


  onLogin(data){
    this.authService.login(data)
    .subscribe(resp=>{
     let jwt=resp.headers.get('Authorization');
     this.authService.saveToken(jwt);
     this.rourer.navigateByUrl("/");
     },err=>{


    })
  }

  isAdmin(){
    return this.authService.isAdmin();
  }
  isUser(){
    return this.authService.isUser();
  }
}