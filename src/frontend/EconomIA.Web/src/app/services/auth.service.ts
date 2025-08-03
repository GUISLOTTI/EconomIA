
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // Verificar se há usuário logado no localStorage
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  // Simular login (substituir por chamada real de API)
  login(email: string, password: string): Observable<boolean> {
    return new Observable(observer => {
      // Simular delay de API
      setTimeout(() => {
        if (email && password) {
          const user: User = {
            id: '1',
            name: 'Usuário Demo',
            email: email
          };
          
          this.currentUserSubject.next(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      }, 1000);
    });
  }

  // Simular registro
  register(name: string, email: string, password: string): Observable<boolean> {
    return new Observable(observer => {
      setTimeout(() => {
        if (name && email && password) {
          const user: User = {
            id: '1',
            name: name,
            email: email
          };
          
          this.currentUserSubject.next(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      }, 1000);
    });
  }

  // Logout
  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }

  // Verificar se está logado
  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  // Obter usuário atual
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
