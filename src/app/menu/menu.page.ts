import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  closeMenu() { 
    console.log("Cerrar menú"); 
    this.menu.close();
  }

  home(){
    this.router.navigateByUrl("/menu/home")
  }

  login(){
    this.router.navigateByUrl("/login")
  }

  intro(){
    this.router.navigateByUrl("/intro")
  }

  categoria(){
    this.router.navigateByUrl("/intro")
  }
  
  event(){
    this.router.navigateByUrl("/events")
  }

  logout(){
    this.navCtrl.navigateRoot("/login")
  }
}
