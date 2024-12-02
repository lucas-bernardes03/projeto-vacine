import {Vacina} from './vacina';
import {Usuario} from './usuario';

export interface Agenda {
  id: number
  data: Date
  situacao: string
  observacoes: string
  vacina: Vacina
  usuario: Usuario
}
