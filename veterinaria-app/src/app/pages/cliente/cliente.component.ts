import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  formularioActivo: 'agenda' | 'contradicciones' | null = null;

  agenda = {
    nombre: '',
    mascota: '',
    motivo: ''
  };

  contradiccion = {
    nombre: '',
    mascota: '',
    problema: ''
  };

  mostrarFormulario(tipo: 'agenda' | 'contradicciones') {
    this.formularioActivo = tipo;
  }

  enviarAgenda() {
    alert(`Agenda enviada:\nNombre: ${this.agenda.nombre}\nMascota: ${this.agenda.mascota}\nMotivo: ${this.agenda.motivo}`);
    this.agenda = { nombre: '', mascota: '', motivo: '' };
    this.formularioActivo = null;
  }

  enviarContradiccion() {
    alert(`Contradicción enviada:\nNombre: ${this.contradiccion.nombre}\nMascota: ${this.contradiccion.mascota}\nProblema: ${this.contradiccion.problema}`);
    this.contradiccion = { nombre: '', mascota: '', problema: '' };
    this.formularioActivo = null;
  }
}
