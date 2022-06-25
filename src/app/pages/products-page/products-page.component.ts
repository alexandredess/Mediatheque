import { Component, OnInit } from '@angular/core';
import Film from 'src/app/models/film.model';
import Album from 'src/app/models/album.model';
import { FilmService } from 'src/app/services/film.service';
import { AlbumService } from 'src/app/services/album.service';



@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  films : Film[]=[];

  albums: Album[] = [];
  

  constructor(private filmService:FilmService, private albumService:AlbumService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((films)=>{
      this.films=films;
    })

    this.albumService.getAlbums().subscribe((albums)=>{
      this.albums=albums;
    })
  }
}
