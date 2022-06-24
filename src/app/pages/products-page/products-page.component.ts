import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  films: any[] = [
    {
    id: 1,
    nom: "La cité de la peur",
    real: "Alain Berbérian",      
    synopsis: "Odile Deray, attachée de presse, vient au Festival de Cannes pourprésenter le film `Red is Dead'. Malheureusement, celui-ci est d'une tellefaiblesse que personne ne souhaite en faire l'écho. Cependant, lorsque lesprojectionnistes du long-métrage en question meurent chacun leur tour dansd'étranges circonstances, `Red is dead' bénéficie d'une incroyable publicité.Serge Karamazov est alors chargé de protéger le nouveau projectionniste du film.",
    annee: 1994,
    img: "https://fr.web.img2.acsta.net/pictures/19/05/03/14/30/1132544.jpg",
    details: ""
  },    
  {        
    id: 2,      
    nom: "Le parrain",      
    real: "Francis Ford Coppola",      
    synopsis: "En 1945, à New York, les Corleone sont une des 5 familles de lamafia. Don Vito Corleone, `parrain' de cette famille, marie sa fille à unbookmaker. Sollozzo, `parrain' de la famille Tattaglia, propose à Don Vito uneassociation dans le trafic de drogue, mais celui-ci refuse. Sonny, un de ses fils,y est quant à lui favorable. Afin de traiter avec Sonny, Sollozzo tente de fairetuer Don Vito, mais celui-ci en réchappe.",      
    annee: 1972,      
    img: "",      
    details: ""    
  },    
  {        
    id: 3,      
    nom: "Fight Club",      
    real: "David Fincher",      
    synopsis: "Pourvu d'une situation des plus enviable, un jeune homme à boutde nerfs retrouve un équilibre relatif en compagnie de Marla, rencontrée dans ungroupe d'entraide. Il fait également la connaissance de Tyler Durden, personnageenthousiaste et charismatique. Ensemble, ils fondent le Fight Club, où ilsorganisent des combats clandestins et violents, destinés à évacuer l'énergienégative de chacun.",      
    annee: 1999,      
    img: "",      
    details: ""    
  }]

  albums: any[] = [
  {          
    id: 4,      
    nom: "The Dark Side of the Moon",      
    artiste: "Pink Floyd",      
    annee: 1973,      
    img: "",      
    details: ""
  },    
  {        
    id: 5,      
    nom: "Space Oddity",      
    artiste: "David Bowie",      
    annee: 1969,      
    img: "",      
    details: ""}]

  constructor() { }

  ngOnInit(): void {
  }

}
