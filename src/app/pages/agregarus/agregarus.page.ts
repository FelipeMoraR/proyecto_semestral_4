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


}
