import { Component } from '@angular/core';
import { ActivatedRoute, Router ,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  data: any;
 
  constructor(private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.data)

      }
});
}


  option = {
    sliderPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 25,
    autoplay: true,
  }

  goSeccionP() {
    let navigationExtras: NavigationExtras = {
      state: {user: this.data}
      };
    this.router.navigate(['/seccion-perruna'],navigationExtras)

  }

  goPerfil() {
    let navigationExtras: NavigationExtras = {
      state: {user: this.data}
      };
    this.router.navigate(['/perfil'],navigationExtras)

  }

  listarP(){
    this.router.navigate(['/listarp'])
  
  }
}