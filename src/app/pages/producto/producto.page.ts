import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

displayedColumns: string[] = ['position', 'name', 'weight'];
dataSource = ELEMENT_DATA;
  
data: any;

constructor(private activeroute: ActivatedRoute, private router: Router) {
  this.activeroute.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state.user;
      console.log(this.data)
    }
});
}


  ngOnInit() {
  }

}
