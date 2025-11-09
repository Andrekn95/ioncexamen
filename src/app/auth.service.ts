import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/login'; // tu endpoint del backend

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
    const body = { username, password };

    return this.http.post<any>(this.apiUrl, body).pipe(
      map(response => {
        console.log('Respuesta del backend:', response);
        // si el backend devuelve true o un token
        if (response === true || response?.token) {
          localStorage.setItem('usuarioLogueado', 'true');
          localStorage.setItem('userEmail', username);
          return true;
        }
        return false;
      }),
      catchError(error => {
        console.error('Error en login:', error);
        return of(false);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('usuarioLogueado');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  hasUser(): boolean {
    return localStorage.getItem('usuarioLogueado') === 'true';
  }
}
