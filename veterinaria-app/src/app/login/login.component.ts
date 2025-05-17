import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      this.router.navigate(['/dashboard']);
    } else {
      // Cualquier otro usuario se va al apartado del cliente
      this.router.navigate(['/cliente']);
    }
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }
}
