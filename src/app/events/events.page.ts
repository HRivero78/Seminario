import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage {

  constructor(
    private navCtrl: NavController,
    private router: Router) {}

  irADeportes() {
    // Coloca aquí el código para navegar a la página de deportes
    window.location.href = 'https://www.google.com/search?gs_ssp=eJzj4tTP1TdIySk0sDRg9OLJyUxPVEhKLSnISawEAF6zB-4&q=liga+betplay&oq=li&gs_lcrp=EgZjaHJvbWUqDAgBEC4YJxiABBiKBTIGCAAQRRg5MgwIARAuGCcYgAQYigUyBwgCEAAYgAQyBwgDEC4YgAQyBwgEEAAYgAQyBwgFEC4YgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYjwLSAQkyMTg0ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8#sie=lg;/g/11vk4tq_5z;2;/m/0dlq09;st;fp;1;;;';
    console.log('Ir a la página de deportes');
  }

  irAConciertos() {
    // Coloca aquí el código para navegar a la página de conciertos
    window.location.href = 'https://www.google.com/search?q=listado+conciertos+colombia&oq=listado+conciertos+colombia&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCjEwMDE1ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8&ibp=htl;events&rciv=evn&sa=X&ved=2ahUKEwiSp5vkg42EAxVgmYQIHcsgCXEQ5bwDegUIlgEQAQ#fpstate=tldetail&htidocid=L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTAzLTIxfDUxMDMyNjE4MTg3NjEzNjQzNzM%3D&htivrt=events&mid=/g/11vkc9pyf3&sxsrf=ACQVn0-8dTP_VAPtGIGCJShw4Z_mT2YkJQ:1706889738382';
    console.log('Ir a la página de conciertos');
  }

  irATeatroCine() {
    // Coloca aquí el código para navegar a la página de teatro-cine
    window.location.href = 'https://www.tripadvisor.es/Attractions-g294073-Activities-c58-t116-Colombia.html';
    console.log('Ir a la página de teatro-cine');
  }

  irAViajes() {
    // Coloca aquí el código para navegar a la página de viajes
    window.location.href = 'https://agenciaoit.com/las-mejores-agencias-de-viaje-en-colombia/';
    console.log('Ir a la página de viajes');
  }

  irASalir() {
    this.router.navigateByUrl('menu/home');
    console.log('Ir a la página de inicio');
  }
}

