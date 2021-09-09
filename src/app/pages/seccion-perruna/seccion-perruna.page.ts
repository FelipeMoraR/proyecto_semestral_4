import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion-perruna',
  templateUrl: './seccion-perruna.page.html',
  styleUrls: ['./seccion-perruna.page.scss'],
})
export class SeccionPerrunaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goProducto(){
    this.router.navigate(['/producto'])
  }
}
