import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contradicciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contradicciones.component.html',
  styleUrls: ['./contradicciones.component.css']
})
export class ContradiccionesComponent {
  contradicciones = [
    {
      cliente: 'Juan Pérez',
      mascota: 'Firulais',
      motivo: 'Ha estado vomitando después de cada comida.'
    },
    {
      cliente: 'Laura Ramírez',
      mascota: 'Luna',
      motivo: 'Tiene sarpullido en la piel y se rasca constantemente.'
    },
    {
      cliente: 'Carlos Torres',
      mascota: 'Max',
      motivo: 'Se rehúsa a caminar y cojea de la pata trasera.'
    }
  ];
}
