import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

email="perrigato@xd.com"
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
