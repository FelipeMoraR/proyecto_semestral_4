import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  a = "ahira su";
  user = "Nicolipe"
  constructor(private router: Router) { }

  option = {
    sliderPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 25,
    autoplay: true,
  }

  goSeccionP() {
    this.router.navigate(['/seccion-perruna'])

  }
}