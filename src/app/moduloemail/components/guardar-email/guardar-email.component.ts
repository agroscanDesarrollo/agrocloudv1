import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'guardar-email',
  template: `
    <h2>{{ title }}</h2>
    <input type="text" [(ngModel)]="emailContacto">
    <button (click)="guardarEmail()">Guardar Email</button>
  `
})
export class GuardarEmailComponent implements OnInit{
  title = 'Guardar email';
  public emailContacto:string;

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
}
  
  guardarEmail() {
    console.log(this.emailContacto);
    localStorage.setItem('emailContacto', this.emailContacto);
    //console.log(localStorage.getItem('emailContacto'));
}
}
