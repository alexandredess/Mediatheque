import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  clap:string="https://www.ballons-a-gogo.com/images/MesProduits/2062/clap-cinema-20cm.jpg"
  cleSol:string="https://www.fete-en-folie.fr/287582-large_default/deco-cle-de-sol-60cm.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
