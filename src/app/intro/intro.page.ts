import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit() {
    console.log("IntroPage initialized");
  }

  ionViewDidEnter() {
    console.log("Ya entré y vi la intro");
  }

  irAlInicio() {
    console.log("go home"); 
    this.storage.set('mostreLaIntro', true);
    this.router.navigateByUrl('/home');
  }
}