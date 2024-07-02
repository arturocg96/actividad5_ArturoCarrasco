import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Inoticias } from '../../interfaces/inoticias';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  newNoticia:Inoticias = {titulo:"", imagen:"", contenido:"", fecha:""};
  
  getData (){
    if (!this.newNoticia.titulo || !this.newNoticia.imagen || !this.newNoticia.contenido || !this.newNoticia.fecha) {
      alert("Por favor, completa todos los campos antes de publicar.");
      return;
    }

    
    console.log(this.newNoticia);
  }
}
