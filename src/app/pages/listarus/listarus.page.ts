import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarus',
  templateUrl: './listarus.page.html',
  styleUrls: ['./listarus.page.scss'],
})
export class ListarusPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }


  agregarus(){
    this.router.navigate(['/agregarus'])
  }
}
