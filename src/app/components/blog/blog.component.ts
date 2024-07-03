import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { ListadoNoticiasComponent } from '../listado-noticias/listado-noticias.component';
import { Inoticias } from '../../interfaces/inoticias';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormularioComponent, ListadoNoticiasComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  arrayNoticias: Inoticias[] = [];

  ngOnInit() {
    this.arrayNoticias = [
      {
        titulo: 'Objetivo personal Máster',
        imagen: 'https://via.placeholder.com/150',
        contenido:
          'Voy a ser el Desarrollador Full Stack Junior que todas las empresas buscan.',
        fecha: '2024-07-01',
      },
      {
        titulo: 'Actividad 4',
        imagen: 'https://via.placeholder.com/150',
        contenido:
          'He utilizado tres componentes para seguir la línea de lo visto en clase.',
        fecha: '2024-07-01',
      },
    ];
  }

  onNoticiaEmitida(event: Inoticias): void {
    this.arrayNoticias.push(event);

  }
}
