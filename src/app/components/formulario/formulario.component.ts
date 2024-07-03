import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Inoticias } from '../../interfaces/inoticias';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  newNoticia: Inoticias = { titulo: '', imagen: '', contenido: '', fecha: '' };

  @Output() noticiaEmitida: EventEmitter<Inoticias> = new EventEmitter();

  getData() {
    if (
      this.newNoticia.titulo !== '' &&
      this.newNoticia.imagen != '' &&
      this.newNoticia.contenido != '' &&
      this.newNoticia.fecha
    ) {
      this.noticiaEmitida.emit(this.newNoticia);

      this.newNoticia = { titulo: '', imagen: '', contenido: '', fecha: '' };
    } else {
      alert('Los campos de la noticia no pueden estar vacíos.');
    }
  }
}
