import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsPageComponent } from '../products-page.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  
  @Input()
  films:any[]=[]
  albums:any[]=[]

  @Input()
  product:any;

  obelix:string="https://1.bp.blogspot.com/-mq6ZzkBncwQ/USPN44Aq7oI/AAAAAAAAAuA/tNMcEp4QRdY/s1600/ObelixSaluda.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
