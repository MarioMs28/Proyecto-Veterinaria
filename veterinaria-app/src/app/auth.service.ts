import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false; // Flag de autenticación

  constructor() {}

  // Método para hacer el login
  login(): void {
    this.isLoggedIn = true; // Cambia el estado de autenticación a true
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
