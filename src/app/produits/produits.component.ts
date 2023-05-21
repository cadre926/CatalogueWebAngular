import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {


  products;

  constructor(private catalogueService: CatalogueService, private route: ActivatedRoute
    , router: Router) {

    router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
      let url: String = atob(route.snapshot.params['urlProds']);
      this.getProducts(url);
    }


  
})

   
   }


ngOnInit(){

}

getProducts(url){

  this.catalogueService.getResource(url)
    .subscribe(data => {

      this.products = data;
    }, err => {
      console.log(err);
    })
}

}
