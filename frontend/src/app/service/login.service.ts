import { Injectable } from '@angular/core';
import {Observable, of, tap} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {HOST_URL} from './agenda.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router,
              private http : HttpClient) { }

  login(usuario: IUsuario): Observable<any> {
    return this.http.post(HOST_URL + '/auth/login', usuario)
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  get obterTokenUsuario(): string {
    return localStorage.getItem('token')
      ? JSON.parse(atob(localStorage.getItem('token')!))
      : null;
  }

  get logado(): boolean {
    return !!localStorage.getItem('token');
  }

  register(login : any){
    return this.http.post(HOST_URL + '/auth/register', login)
  }
}

export interface IUsuario{
  username: string
  password: string
}
