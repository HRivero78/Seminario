import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private storage: Storage) {}

  ngOnInit() {
    this.storage.get('mostreLaIntro').then((result) => {
      console.log('mostreLaIntro from storage:', result);
    });
  }

  goToIntro() {
    console.log("Ir a la Intro")
    this.router.navigateByUrl('/login');
    this.storage.set('mostreLaIntro', true);
    };
  }


