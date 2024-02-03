import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage {
  categories: any[] = []; // Inicializamos la propiedad categories como un array vacío

  constructor(private router: Router) {}

  navigateToCategory(category: any) {
    // Aquí defines la lógica para navegar a la página de la categoría seleccionada
    // Por ejemplo, supongamos que cada categoría tiene un ID y quieres navegar a la página 'category/:id'
    // Puedes pasar el ID de la categoría como parámetro en la URL
    this.router.navigate(['/category', category.id]); // Ajusta '/category' según la ruta real de tu aplicación
  }
}
