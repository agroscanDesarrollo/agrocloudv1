import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
// Declaramos las variables para jQuery
declare var jQuery: any;
declare var L: any;

declare var $: any;

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  
  ngOnInit() {
    this.mapa();
        

  }

  ocultarSidebar() {
    $('#sidebar').toggleClass('ocultar-sidebar');
    if ($('#sidebar').hasClass('ocultar-sidebar')) {
      $('.fas').removeClass('fa-caret-left').addClass('fa-caret-right');
    } else {
            $('.fas').removeClass('fa-caret-right').addClass('fa-caret-left');
    }
  }

  mapa(){
    var map = L.map('map').setView([51.505, -0.09], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

}
