import { Injectable } from '@angular/core';
import {Vacina, vacinas} from '../interface/vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {
  constructor() { }

  getVacinas(): Vacina[]{
    return vacinas;
  }
}
