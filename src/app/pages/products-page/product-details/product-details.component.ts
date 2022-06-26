//import du router
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterPreloader } from '@angular/router';
import { Observable } from 'rxjs';
//import des models
import Album from 'src/app/models/album.model';
import Film from 'src/app/models/film.model';
//import des services
import { AlbumService } from 'src/app/services/album.service';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input()
  product!:any;

  constructor(
    private router:Router, 
    private route:ActivatedRoute,
    private filmService:FilmService,
    private albumService:AlbumService
    ) { }

  ngOnInit(): void {
  
    if(this.route.snapshot.paramMap.get('type') == "Film"){
      const id= this.route.snapshot.paramMap.get('id');
      if(id){
        this.product = this.filmService.getFilm(parseInt(id)).subscribe((product)=> this.product=product);
      }
        
    }
    /* Obtenir l'identifiant du produit, puis obtenir les données du produit. */
    else{
      const id= this.route.snapshot.paramMap.get('id');
      if(id){
        this.product = this.albumService.getAlbum(parseInt(id)).subscribe((product)=> this.product=product);
      }
    }
  }
}
