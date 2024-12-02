import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HOST_URL} from './agenda.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {
  constructor(private http : HttpClient) { }

  getVacinas(): Observable<any>{
    return this.http.get(HOST_URL + '/vacina');
  }

}
