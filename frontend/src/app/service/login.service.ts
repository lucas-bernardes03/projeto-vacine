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
    return this.mockUsuarioLogin(usuario).pipe(tap((resposta) => {
      if(!resposta.sucesso) return;
      localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")));
      localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
      this.router.navigate(['']);
    }));
  }

  private mockUsuarioLogin(usuario: IUsuario): Observable<any> {
    var retornoMock: any = [];
    if(usuario.usuario === "teste" && usuario.senha == "123"){
      retornoMock.sucesso = true;
      retornoMock.usuario = usuario;
      retornoMock.token = "TokenQueSeriaGeradoPelaAPI";
      return of(retornoMock);
    }
    retornoMock.sucesso = false;
    retornoMock.usuario = usuario;
    return of(retornoMock);
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  get obterUsuarioLogado(): IUsuario {
    return localStorage.getItem('usuario')
      ? JSON.parse(atob(localStorage.getItem('usuario')!))
      : null;
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
  usuario: string
  senha: string
}
