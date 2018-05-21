import { Component, OnInit } from '@angular/core';
//import { NgForms } from '@angular/forms';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Persona } from '../persona';
//import { ErrorComponent } from '../error.component';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {

    @Output() enviarDato : EventEmitter<Persona> = new EventEmitter<Persona>();

    //Declaro el User nuevo
    public miPersona = new Persona("","");


    constructor(private router: Router) { }
    //constructor(private router: Router, private miservice:Mis) { }

  ngOnInit() {
  }

  public Enviar()
  {
        if(this.miPersona.usuario == "admin" && this.miPersona.password == "123456" ){
            this.router.navigate(['/alumno']);
        } else{
            this.router.navigate(['/error']);
        }


  }

}
