import { Component,OnInit } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CatalogueWebApp';

  constructor(private authService:AuthentificationService) { }

 
  isAdmin(){
    return this.authService.isAdmin();
  }
  isUser(){
    return this.authService.isUser();
  }


  isAutenticated(){
    return this.authService.isAuthenticated();
  }


  ngOnInit(): void {

    this.authService.loadToken();
      
  }

  logout(){

    this.authService.logout();


  }

}
