import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperacion3',
  templateUrl: './recuperacion3.page.html',
  styleUrls: ['./recuperacion3.page.scss'],
})
export class Recuperacion3Page implements OnInit {
  recuper1="";
  recuper2="";

  constructor(private router: Router,public alertController: AlertController) { }

  ngOnInit() {
  }

  async recuperar3(){
    if (this.recuper1=="" || this.recuper2==""){
      console.log("bbbb")
      const alert = await this.alertController.create({
        header: "Error en formulario",
        message: "El formulario no puede estar vacio",
        buttons: ["OK"]
      });
      await alert.present()
      let result = await alert.onDidDismiss();
      console.log(result);
      
    return
    }
    if(this.recuper1 != this.recuper2){
      console.log("aaa")
      const alert = await this.alertController.create({
        header: "Error en formulario",
        message: "Las contraseñas deben ser iguales",
        buttons: ["OK"]
      });
      await alert.present()
      let result = await alert.onDidDismiss();
      console.log(result);
      
    return
    }
    

    console.log("sx");
      
    this.router.navigate(['/login'])
      
      
    }
  
}
