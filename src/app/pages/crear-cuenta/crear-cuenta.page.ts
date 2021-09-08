import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  

  constructor(public alertController: AlertController,private _formBuilder: FormBuilder) { 
    
  }
  

/**
 * on distroi para poder conectar links
 * oninit se ejecuta al inicio del componente al cambiar de vista.
 * 
 */

  ngOnInit() { 
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', [Validators.required,Validators.minLength(2)]]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


  async onSubmit(){
    
    if(!this.firstFormGroup.valid){
      console.log("Tu formulario es invalido")
      return;
      
      
    }
    const alert = await this.alertController.create({
      header: "Creacion de cuenta",
      message: "Se a creado la cuenta correctamente",
      buttons: ["OK"]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
    
  }
  
    clean(){
      this.firstFormGroup.patchValue({
        firstCtrl:''


      })

    }
}
