import { Component } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { Inoticias } from './interfaces/inoticias';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent, ListadoNoticiasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  arrayNoticias: Inoticias[] = [];

  constructor() {
    
    this.arrayNoticias = [
      {
        titulo: 'Noticia 1: Objetivo personal Máster',
        imagen: 'https://via.placeholder.com/150',
        contenido: 'Voy a ser el Desarrollador Full Stack Junior que todas las empresas buscan.',
        fecha: '2024-07-01'
      },
      {
        titulo: 'Noticia 2: Motivación',
        imagen: 'https://via.placeholder.com/150',
        contenido: 'Cada vez me siento más cómodo con las tecnologías que estamos aprendiendo.',
        fecha: '2024-07-01'
      }
    ];
  }
}
