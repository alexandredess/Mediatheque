//import du router
import { Component, OnInit } from '@angular/core';
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

  product!:Film | Album;

  constructor(
    private router:Router, 
    private route:ActivatedRoute,
    private filmService:FilmService,
    private albumService:AlbumService
    ) { }

    private subscribeFilm(id:number):void{
      //on souscrit à un film
      this.filmService.getFilm(id).subscribe((film)=>{
      //et on y affecte la variable product
      this.product =film;
      });
    }

    private subscribeAlbum(id:number):void{
      this.albumService.getAlbum(id).subscribe((album)=>{
        this.product =album;
      });
    }

    private setSubsribe(type:string | null, id : string | null):void {
      //si l'objet contien album alors on souscrit à album
      if(id && type === 'album') {
        //avec le +devant id on le cast en null
        this.subscribeAlbum(+id);
        //idem pour film
      }else if (id && type === 'film') {
        this.subscribeFilm(+id);
      }else if (!id || !type) {
        //on gère la redirection 404 si c'est différent de type ou différent de l'id
        this.router.navigate(['/not-found'])
      }
    }

  ngOnInit(): void {
    //on récupère la partie 'type' de l'url
    const type = this.route.snapshot.paramMap.get('type');
    //on stock l'id de l'url
    const id = this.route.snapshot.paramMap.get('id');
    //on appelle la methode setSuscribe en lui passant les informations
    this.setSubsribe(type,id);
  }


}
