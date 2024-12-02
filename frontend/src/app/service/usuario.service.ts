import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HOST_URL} from './agenda.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http : HttpClient) { }

  getUsuarios () : Observable<any>{
    return this.http.get(HOST_URL + '/usuario')
  }

}
