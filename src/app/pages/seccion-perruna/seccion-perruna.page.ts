import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-seccion-perruna',
  templateUrl: './seccion-perruna.page.html',
  styleUrls: ['./seccion-perruna.page.scss'],
})
export class SeccionPerrunaPage implements OnInit {

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

  goProducto(){
    let navigationExtras: NavigationExtras = {
      state: {user: this.data}
      };
    this.router.navigate(['/producto'],navigationExtras)
  }
}
