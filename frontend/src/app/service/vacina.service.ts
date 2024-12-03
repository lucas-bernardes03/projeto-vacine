import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HOST_URL} from './agenda.service';
import {Observable} from 'rxjs';
import {Vacina} from '../interface/vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {
  constructor(private http : HttpClient) { }

  getVacinas(): Observable<any>{
    return this.http.get(HOST_URL + '/vacina');
  }

  novaVacina(vacina: Vacina): Observable<any>{
    return this.http.post(HOST_URL + '/vacina', vacina)
  }

  salvarVacina(vacina: Vacina) : Observable<any>{
    return this.http.put(HOST_URL + '/vacina', vacina)
  }

  excluirVacina(vacina : Vacina): Observable<any>{
    return this.http.delete(HOST_URL + '/vacina', {body: vacina})
  }

}
