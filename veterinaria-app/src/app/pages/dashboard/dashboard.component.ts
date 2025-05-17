import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { ContradiccionesComponent } from './contradicciones/contradicciones.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AgendaComponent,
    MedicamentosComponent,
    ContradiccionesComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  seccionActual: string = 'agenda';

  mostrarSeccion(seccion: string) {
    this.seccionActual = seccion;
  }
}
