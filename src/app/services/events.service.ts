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

// Método para listar categoría por ID
  getCategories() {
    return fetch(`${this.urlServer}/categories`).then(
      response => response.json()
    );
  }

  // Método para obtener detalles de una categoría específica por ID
  getCategoryById(categoryId: number) {
    return fetch(`${this.urlServer}/categories/${categoryId}`).then(
      response => response.json()
    );
  }

}
