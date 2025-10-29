import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly VALID_EMAIL = 'usuario@yavirac.edu.ec';
  private readonly VALID_PASSWORD = '123456';
  
  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    console.log('AuthService - Intentando login:', email, password);
    
    if (email === this.VALID_EMAIL && password === this.VALID_PASSWORD) {
      console.log('AuthService - Login exitoso');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      return true;
    }
    
    console.log('AuthService - Login fallido');
    return false;
  }

  logout(): void {
    console.log('AuthService - Cerrando sesión');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/login']);
  }

  hasUser(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    console.log('AuthService - Verificando sesión:', isLoggedIn);
    return isLoggedIn;
  }
}