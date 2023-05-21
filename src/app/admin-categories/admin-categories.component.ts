import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  categories;
  mode='list';
  constructor(private catalogueService: CatalogueService) {

  }
  ngOnInit(): void {
    this.onGetAllCategories();

  }

  onGetAllCategories() {
    this.catalogueService.getAllCategories()
      .subscribe(data => {
        this.categories = data;

      }, err => {
        console.log(err);
      })
  }
  onDeleteCat(cat) {

    let c = confirm("Etes vous sure de vouloir supprimer?");
    if (!c) return;
    this.catalogueService.deleteResource(cat._links.self.href)
      .subscribe(data => {
        this.mode='list';
        this.onGetAllCategories();

      }, err => {
        console.log(err);

      })

  }

  onNewCat() {
    this.mode='new-cat'

  }
  onSaveCat(data){

    let url=this.catalogueService.host+"/categories";
  this.catalogueService.postResource(url,data)
  .subscribe(data=>{
        this.mode='list';
    
    this.onGetAllCategories();
  },err=>{
    console.log(err);
    
  })

  }

  onUpdateCat(data){

  this.catalogueService.putResource(this.currentcategorie._links.self.href,data)
  .subscribe(data=>{
        this.mode='list';
    
    this.onGetAllCategories();
  },err=>{
    console.log(err);
    
  })

  }

  currentcategorie;
  onEditCat(cat){

    this.catalogueService.getResource(cat._links.self.href)
    .subscribe(data=>{
      this.currentcategorie=data;

      this.mode='edit-cat'

    }),err=>{

      console.log(err);
      
    }


  }

  // onUpdateCat(cat){

  //   this.catalogueService.getResource(cat._links.self.href)
  //   .subscribe(data=>{
  //     this.currentcategorie=data;

  //     this.mode='edit-cat'

  //   }),err=>{

  //     console.log(err);
      
  //   }


  // }

  

}




