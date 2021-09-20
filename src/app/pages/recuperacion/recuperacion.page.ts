import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {
  validacion1 = "";
  constructor(private router: Router,public alertController: AlertController) { }

  ngOnInit() {
  }
  
  
  async recuperar(){
    if(this.validacion1 == ""){
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
      
    this.router.navigate(['/recuperacion2'])
      

    
    
    
    
    }
  
}
