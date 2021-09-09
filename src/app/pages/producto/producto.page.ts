import { Component, OnInit } from '@angular/core';

export interface Caracteristicas {
  name: string;
  position: string;
  weight: string;
 
}
const ELEMENT_DATA: Caracteristicas[] = [
  {position: '1-', name: 'Peso', weight: '150g'},
  {position: '2-', name: 'Material', weight: 'Plastico y metal'},
 
];

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
cepillo="Cepillo Bonito";
user1="Nicolipe";
displayedColumns: string[] = ['position', 'name', 'weight'];
dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
