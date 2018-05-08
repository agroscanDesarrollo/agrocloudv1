import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  template: `
  <div class="panel panel-default">
  <h2>{{ title }}</h2>
  <guardar-email></guardar-email>
  <mostrar-email></mostrar-email>
  </div>
  `
})
export class MainEmailComponent implements OnInit{
  title = 'modulo de emails';
  
  

  ngOnInit(){
    //this.emailContacto=localStorage.getItem('emailContacto');    
    console.log("componente principal del modulo cargado");
  }
  
}
