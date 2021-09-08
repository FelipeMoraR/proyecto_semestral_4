import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  
  
  

  constructor(public alertController: AlertController,private _formBuilder: FormBuilder,private router:Router) { 
    
  }
  

/**
 * on distroi para poder conectar links
 * oninit se ejecuta al inicio del componente al cambiar de vista.
 * 
 */

  ngOnInit() { 
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', [Validators.required,Validators.minLength(2)]],
      alias: ['', [Validators.required,Validators.minLength(2)]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
      password_c: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
      email: ['', [Validators.required]],
    });
    
  }


  async onSubmit(){
    
    if(!this.firstFormGroup.valid){
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
      header: "Creacion de cuenta",
      message: "Se a creado la cuenta correctamente",
      buttons: ["OK"]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
    this.router.navigate(['/login'] )
  }
  
    clean(){
      this.firstFormGroup.patchValue({
        firstCtrl:'',
        alias:'',
        password:'',
        password_c:'',
        email: ''



      })

    }
    goHome() {
      this.router.navigate(['/home'])
  
    }
}
