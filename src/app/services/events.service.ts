import { Injectable } from '@angular/core';
import * as dataEvents from "./events.json";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  urlServer = "http://190.131.209.106";
  
  constructor() { }

  getEvents(){
    return fetch(`${this.urlServer}/events`).then(
      reponse => reponse.json()
    );
  }

  getLocalEvents(){
    return dataEvents; 
  }

}