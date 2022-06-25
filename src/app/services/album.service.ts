import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

//import de l'interface album
import Album from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
//on fait la passerelle pour aller chercher les données 
private apiUrl = 'http://localhost:3000';
  constructor(private httpClient : HttpClient) { }
  //pour récupérer la liste des albums
  getAlbums():Observable<Album[]>{
    return this.httpClient.get<Album[]>(`${this.apiUrl}/albums`)
  }
  //pour récupérer l'album par son id
  getAlbum(id:number):Observable<Album>{
    return this.httpClient.get<Album>(`${this.apiUrl}/albums/${id}`)
  }
  //pour créer un album
  createAlbum(album:Album):Observable<Album>{
    return this.httpClient.post<Album>(`${this.apiUrl}/albums`,album)
  }

  // pour Modifier un album
  updateAlbum(album:Album):Observable<Album>{
    return this.httpClient.put<Album>(`${this.apiUrl}/albums/${album.id}`,album)
  }

  // pour supprimer un album
  deleteAlbum(album:Album):Observable<Album>{
    return this.httpClient.delete<Album>(`${this.apiUrl}/albums/${album.id}`);
  }
}
