import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides =[
    {
    title : "hola",
    description : "w",
    images : "www"
    }
  ] 
  constructor() { }

  ngOnInit() {
  }

}
