import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-mod-contrasena',
  templateUrl: './mod-contrasena.page.html',
  styleUrls: ['./mod-contrasena.page.scss'],
})
export class ModContrasenaPage implements OnInit {

  constructor(public alertController: AlertController,private _formBuilder: FormBuilder,private router:Router) { }
  formulario_con: FormGroup;
  
  ngOnInit() {
    this.formulario_con = this._formBuilder.group({
      mod_contra: ['', [Validators.required]],
      mod_contra2: ['', [Validators.required]],
    });
  }

  async modificarUs(){
    if(!this.formulario_con.valid){
      
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
    
    
    if(this.formulario_con.get('mod_contra').value == this.formulario_con.get('mod_contra2').value){
      console.log('Ta piola')
      const alert = await this.alertController.create({
        header: "Modificacion de contraseña",
        message: "Se a modificado la contraseña correctamente",
        buttons: ["OK"]
      });
      await alert.present()
      let result = await alert.onDidDismiss();
      console.log(result);
      this.router.navigate(['/perfil'] )
      return
    }
    

    console.log('no ta piola')
      const alert = await this.alertController.create({
        header: "Modificacion de contraseña",
        message: "Error al modificar contraseña , las contraseñas no concuerdan",
        buttons: ["OK"]
      });
      await alert.present()
      let result = await alert.onDidDismiss();
      console.log(result);
      
      return
  }
}
