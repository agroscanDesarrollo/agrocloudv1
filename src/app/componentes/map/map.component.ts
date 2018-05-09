import { Component, OnInit } from '@angular/core';


// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  ngOnInit() {

  }


  ocultarSidebar() {
    $('#sidebar').toggleClass('ocultar-sidebar');
    if ($('#sidebar').hasClass('ocultar-sidebar')) {
      $('.fas').removeClass('fa-caret-left').addClass('fa-caret-right');
    } else {
            $('.fas').removeClass('fa-caret-right').addClass('fa-caret-left');
    }
  }


}
