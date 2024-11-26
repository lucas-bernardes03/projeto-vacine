import { Injectable } from '@angular/core';
import {Vacina, vacinas, vacinasDropdown} from '../interface/vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {
  constructor() { }

  getVacinas(): Vacina[]{
    return vacinas;
  }

  getVacinasDropdown(): Vacina[]{
    return vacinasDropdown;
  }
}
