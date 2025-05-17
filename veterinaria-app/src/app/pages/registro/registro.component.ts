import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nuevoUsuario = {
    nombre: '',
    correo: '',
    password: ''
  };

  constructor(private router: Router) {}

  registrar() {
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    this.router.navigate(['/login']);
  }

  irALogin() {
    this.router.navigate(['/login']);
  }
}
