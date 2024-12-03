import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HOST_URL} from './agenda.service';
import {Alergia} from '../interface/alergia';

@Injectable({
  providedIn: 'root'
})
export class AlergiaService {
  constructor(private http : HttpClient) { }
  getAlergias(): Observable<any>{
    return this.http.get(HOST_URL + '/alergia');
  }

  novaAlergia(alergia: Alergia): Observable<any>{
    return this.http.post(HOST_URL + '/alergia', alergia)
  }

  salvarAlergia(alergia: Alergia) : Observable<any>{
    return this.http.put(HOST_URL + '/alergia', alergia)
  }

  excluirAlergia(alergia : Alergia): Observable<any>{
    return this.http.delete(HOST_URL + '/alergia', {body: alergia})
  }

}
