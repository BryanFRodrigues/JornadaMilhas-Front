import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LoginResponse } from '../types/login-response.type';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  apiUrlLogin: string = 'http://localhost:8081/auth/login';
  apiUrlRegister: string = "http://localhost:8081/auth/register";

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(this.apiUrlLogin, { email, password }).pipe(
      tap((response) => {
        sessionStorage.setItem('auth-token', response.token);
        sessionStorage.setItem('username', response.name);
      })
    );
  }

  register(email:string, password:string, name: string){
    return this.http.post(this.apiUrlRegister,{email,password,name})
  }
}
