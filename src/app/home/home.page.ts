import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  event_list = [];

  constructor(
    private router: Router, 
    private storage: Storage,
    private events: EventsService
    ) {}

    ionViewDidEnter(){
      this.events.getEvents().then(
        res => {
          this.event_list = res;
          console.log("Eventos desde el servidor",this.event_list)
        }
      )
      console.log("local events", this.events.getLocalEvents());
    }

  ngOnInit() {
    this.storage.get('mostreLaIntro').then((result) => {
      console.log('mostreLaIntro from storage:', result);
      if (result === null) { // Si result es null, no se ha mostrado la intro
        this.router.navigateByUrl('/login');
        this.storage.set('mostreLaIntro', true);
      }
    });
  }
  
  goToIntro() {
    console.log("Ir a la Intro")
    this.router.navigateByUrl('/login');
    this.storage.set('mostreLaIntro', true);
    };


  }


