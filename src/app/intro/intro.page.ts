import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    console.log("IntroPage initialized");
  }

  ionViewDidEnter(){
    console.log("Ya entre y vi la intro")
 }

  irAlInicio() {
    this.router.navigateByUrl('/home');
  }
}

