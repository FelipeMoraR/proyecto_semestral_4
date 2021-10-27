import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarp',
  templateUrl: './listarp.page.html',
  styleUrls: ['./listarp.page.scss'],
})
export class ListarpPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }




agregarpro(){
  this.router.navigate(['/agregarpro'])
}

}
