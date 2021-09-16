import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  variable1 = "";
  password1 = "";
  comparativa_v1 ="xXeduardoXx";
  comparativa_p1="123";

  comparativa_v2 ="Nicolipe";
  comparativa_p2="1234";

  comparativa_v3 ="Morao";
  comparativa_p3="12345";
  

  constructor(private router: Router,public alertController: AlertController) { }

  ngOnInit() {
  }

  async validarInicio(){
    if(this.variable1 == this.comparativa_v1 
      && this.password1 == this.comparativa_p1){
      console.log("pancito")
      
      let navigationExtras: NavigationExtras = {
        state: {user: this.variable1}
        };
        
        
        this.router.navigate(['/home'],navigationExtras)
      return

    }
    if(this.variable1 == this.comparativa_v2 
      && this.password1 == this.comparativa_p2){
      console.log("pancito")
      
      let navigationExtras: NavigationExtras = {
        state: {user: this.variable1}
        };
        
        
        this.router.navigate(['/home'],navigationExtras)
      return

    }
    if(this.variable1 == this.comparativa_v3 
      && this.password1 == this.comparativa_p3){
      console.log("pancito")
      
      let navigationExtras: NavigationExtras = {
        state: {user: this.variable1}
        };
        
        
        this.router.navigate(['/home'],navigationExtras)
      return

    }
    console.log("no es pancito")
    const alert = await this.alertController.create({
      header: "Error al iniciar sesion",
      message: "Verifique sus datos",
      buttons: ["OK"]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);

  }
  
}
