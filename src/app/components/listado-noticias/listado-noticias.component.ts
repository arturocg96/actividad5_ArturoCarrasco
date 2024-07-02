import { Component, Input } from '@angular/core';
import { Inoticias } from '../../interfaces/inoticias';

@Component({
  selector: 'app-listado-noticias',
  standalone: true,
  imports: [],
  templateUrl: './listado-noticias.component.html',
  styleUrl: './listado-noticias.component.css'
})
export class ListadoNoticiasComponent {

  @Input() noticias: Inoticias[]=[];

  ngOnInit () {
    this.cargarNoticias();
  }

  cargarNoticias(): string {
    let html = "";
  
    this.noticias.forEach((noticia: Inoticias) => {
      html += `<article class="noticia">
                  <h3 class="noticia__titulo">${noticia.titulo}</h3>
                  <img src="${noticia.imagen}" alt="Imagen de ${noticia.titulo}">
                  <p class="noticia__contenido">${noticia.contenido}</p>
                  <p class="noticia__fecha">${noticia.fecha}</p>
              </article>`;
    });
  
    return html;
  }
  
}
