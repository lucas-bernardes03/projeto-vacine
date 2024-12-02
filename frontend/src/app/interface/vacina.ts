export interface Vacina {
  id?: number
  titulo?: string
  descricao?: string
  doses?: number
  periodicidade?: number
  intervalo?: number
}

export enum Periodicidade {
  DIA = 1,
  SEMANA = 2,
  MES = 3,
  ANO = 4,
}
