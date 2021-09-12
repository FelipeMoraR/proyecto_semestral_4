import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.page.html',
  styleUrls: ['./modificar-usuario.page.scss'],
})
export class ModificarUsuarioPage implements OnInit {

  constructor(public alertController: AlertController,private _formBuilder: FormBuilder,private router:Router) { }
  formulario_us: FormGroup;
  
  
  ngOnInit() {
    this.formulario_us = this._formBuilder.group({
      mod_us: ['', [Validators.required]]
      
    });
  }

  async modificar(){
    if(!this.formulario_us.valid){
      console.log("Tu formulario es invalido")
      const alert = await this.alertController.create({
        header: "Formulario invalido",
        message: "Rellene de manera apropiada todos los campos",
        buttons: ["OK"]
      });
      await alert.present()
      let result = await alert.onDidDismiss();
      console.log(result);
      return;
      
      
    }
    const alert = await this.alertController.create({
      header: "Modificacion de contraseña",
      message: "Se a modificado la contraseña correctamente",
      buttons: ["OK"]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
    this.router.navigate(['/perfil'] )

  }

}
