import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperacion2',
  templateUrl: './recuperacion2.page.html',
  styleUrls: ['./recuperacion2.page.scss'],
})
export class Recuperacion2Page implements OnInit {
  validacion2 ="";
  constructor(public alertController: AlertController,private router: Router) { }

  ngOnInit() {
  }
  async recuperar2(){
    if(this.validacion2 == ""){
      console.log("aaa")
      const alert = await this.alertController.create({
        header: "Error en formulario",
        message: "El campo no puede estar vacio",
        buttons: ["OK"]
      });
      await alert.present()
      let result = await alert.onDidDismiss();
      console.log(result);
      return
      
    }
    
    console.log("sx");
      
    this.router.navigate(['/recuperacion3'])
      

    
    
    
    
    }
}
