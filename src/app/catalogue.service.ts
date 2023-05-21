import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {


  public host:String="http://localhost:8087"; 

  constructor(private http:HttpClient,private authService:AuthentificationService) { }


  getAllCategories(){

    return this.http.get(this.host+"/categories");
  }

  getResource(url){

    return this.http.get(url);
  }

  deleteResource(url) {


    let header= new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.delete(url,{headers:header});

  }

  postResource(url,data) {


    let header= new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.post(url,data,{headers:header});

  }

  putResource(url,data) {


    let header= new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.put(url,data,{headers:header});

  }

  patchResource(url,data) {


    let header= new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt});
    return this.http.patch(url,data,{headers:header});

  }
}
