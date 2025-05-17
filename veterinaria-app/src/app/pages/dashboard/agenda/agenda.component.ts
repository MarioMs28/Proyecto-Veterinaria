import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {
  citas = [
    {
      cliente: 'Juan Pérez',
      mascota: 'Firulais',
      fecha: '2025-05-15',
      hora: '10:00',
      motivo: 'Revisión general'
    },
    {
      cliente: 'Laura Ramírez',
      mascota: 'Luna',
      fecha: '2025-05-16',
      hora: '14:30',
      motivo: 'Vacunación anual'
    },
    {
      cliente: 'Carlos Torres',
      mascota: 'Max',
      fecha: '2025-05-17',
      hora: '12:00',
      motivo: 'Limpieza dental'
    }
  ];
}
