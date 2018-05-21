import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { DatosComponent } from './datos/datos.component';
import { GrillaComponent } from './grilla/grilla.component';

import { Persona } from './persona';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

const MiRuteo = [
    { path : '' , component : LoginComponent },
    { path : 'login' , component : LoginComponent },
    { path : 'alumno' ,component : AlumnoComponent ,
        children : [
                {path: 'datos' , component : DatosComponent},
                {path: 'grilla' , component : GrillaComponent}
            ]
    },
    {path : '**' , component : ErrorComponent},
    {path : 'error' , component : ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    AlumnoComponent,
    DatosComponent,
    GrillaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MiRuteo),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
