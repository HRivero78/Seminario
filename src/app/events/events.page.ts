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
    console.log('Ir a la página de deportes');
  }

  irAConciertos() {
    // Coloca aquí el código para navegar a la página de conciertos
    console.log('Ir a la página de conciertos');
  }

  irATeatroCine() {
    // Coloca aquí el código para navegar a la página de teatro-cine
    console.log('Ir a la página de teatro-cine');
  }

  irAViajes() {
    // Coloca aquí el código para navegar a la página de viajes
    console.log('Ir a la página de viajes');
  }

  irASalir() {
    this.router.navigateByUrl('/home');
    console.log('Ir a la página de inicio');
  }
}

