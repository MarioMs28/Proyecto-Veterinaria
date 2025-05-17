import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent {
  medicamentos = [
    { nombre: 'Amoxicilina', disponible: 25 },
    { nombre: 'Ibuprofeno', disponible: 8 },
    { nombre: 'Prednisona', disponible: 4 },
    { nombre: 'Paracetamol', disponible: 15 }
  ];

  get medicamentosEnDesabasto() {
    return this.medicamentos.filter(m => m.disponible <= 10);
  }
}
