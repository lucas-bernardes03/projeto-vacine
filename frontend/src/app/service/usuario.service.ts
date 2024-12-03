import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HOST_URL} from './agenda.service';
import {Observable} from 'rxjs';
import {Usuario} from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http : HttpClient) { }

  getUsuarios () : Observable<any>{
    return this.http.get(HOST_URL + '/usuario')
  }

  novoUsuario(usuario: Usuario): Observable<any>{
    return this.http.post(HOST_URL + '/usuario', usuario)
  }

  salvarUsuario(usuario: Usuario) : Observable<any>{
    return this.http.put(HOST_URL + '/usuario', usuario)
  }

  excluirUsuario(usuario : Usuario): Observable<any>{
    return this.http.delete(HOST_URL + '/usuario', {body: usuario})
  }
}
