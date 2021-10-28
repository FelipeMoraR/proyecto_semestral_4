import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarus',
  templateUrl: './agregarus.page.html',
  styleUrls: ['./agregarus.page.scss'],
})
export class AgregarusPage implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  constructor(public alertController: AlertController,private _formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() { 
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', [Validators.required,Validators.minLength(2)]],
      alias: ['', [Validators.required,Validators.minLength(2)]],
      password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
      password_c: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
      email: ['', [Validators.required]],
      tip_usuario: ['', [Validators.required]],
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
      header: "Creacion de Usuario",
      message: "Se a creado el usuario correctamente",
      buttons: ["OK"]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
    this.router.navigate(['/home'] )
  }

  clean(){
    this.firstFormGroup.patchValue({
      firstCtrl:'',
      alias:'',
      password:'',
      password_c:'',
      email: '',
      tip_usuario: ''



    })

  }

}
