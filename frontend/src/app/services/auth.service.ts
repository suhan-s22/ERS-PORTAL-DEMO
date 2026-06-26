import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupRequest } from '../models/signup-request';
import { ApiResponse } from '../models/api-response';
import { LoginRequest } from '../models/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly storageKey = 'ers_logged_in';
  private readonly apiUrl = 'http://localhost:8080/api/auth';

  private http = inject(HttpClient);

  login(): void {
    localStorage.setItem(this.storageKey, 'true');
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.storageKey) === 'true';
  }

  signup(user: SignupRequest): Observable<ApiResponse> {
  return this.http.post<ApiResponse>(`${this.apiUrl}/signup`, user);
}

loginUser(loginRequest: LoginRequest) {
  return this.http.post<ApiResponse>(
    `${this.apiUrl}/login`,
    loginRequest
  );
}
}
 