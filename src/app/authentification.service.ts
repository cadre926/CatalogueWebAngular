import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
 
 

  host:string="http://localhost:8080";
  jwt:string;
  username:string;
  roles:Array<string>;


  constructor(private http:HttpClient) { 
    
  }

  login(data){

    return this.http.post(this.host+"/login",data,{observe:'response'});
  }

  saveToken(jwt: string) {
    localStorage.setItem('token',jwt);
    this.jwt=jwt;
    this.parseJWT();
  }
  parseJWT() {
      let jwtHelper=new JwtHelperService();

      let objJWT=jwtHelper.decodeToken(this.jwt);
      this.username=objJWT.obj;
      this.roles=objJWT.roles;

  }


  isAdmin(){
    return this.roles.indexOf('ADMIN')>=0;
  }
  isUser(){
    return this.roles.indexOf('USER')>=0;
  }

  isAuthenticated(){

    return this.roles!=undefined;
  }


  loadToken() {
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }

  logout() {

    localStorage.removeItem('token');

    this.initParams();
    
  }

  initParams(){
    this.jwt=undefined;
    this.username=undefined;
    this.roles=undefined;
    
  }
}
