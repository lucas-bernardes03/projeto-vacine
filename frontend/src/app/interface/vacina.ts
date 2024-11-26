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

export const vacinas: Vacina[] = [
  { id: 1, titulo: "Vacina A", descricao: "Vacina contra a gripe", doses: 1, periodicidade: Periodicidade.ANO, intervalo: 1 },
  { id: 2, titulo: "Vacina B", descricao: "Vacina contra a COVID-19", doses: 2, periodicidade: Periodicidade.MES, intervalo: 6 },
  { id: 3, titulo: "Vacina C", descricao: "Vacina contra a hepatite B", doses: 3, periodicidade: Periodicidade.ANO, intervalo: 5 },
  { id: 4, titulo: "Vacina D", descricao: "Vacina contra a febre amarela", doses: 1, periodicidade: Periodicidade.ANO, intervalo: 10 },
  { id: 5, titulo: "Vacina E", descricao: "Vacina contra o tétano", doses: 5, periodicidade: Periodicidade.DIA, intervalo: 15 },
  { id: 6, titulo: "Vacina F", descricao: "Vacina contra a difteria", doses: 3, periodicidade: Periodicidade.ANO, intervalo: 5 },
  { id: 7, titulo: "Vacina G", descricao: "Vacina contra a poliomielite", doses: 4, periodicidade: Periodicidade.SEMANA, intervalo: 4 },
  { id: 8, titulo: "Vacina H", descricao: "Vacina contra a meningite", doses: 2, periodicidade: Periodicidade.ANO, intervalo: 2 },
  { id: 9, titulo: "Vacina I", descricao: "Vacina contra o sarampo", doses: 2, periodicidade: Periodicidade.ANO, intervalo: 1 },
  { id: 10, titulo: "Vacina J", descricao: "Vacina contra a caxumba", doses: 2, periodicidade: Periodicidade.ANO, intervalo: 1 },
  { id: 11, titulo: "Vacina K", descricao: "Vacina contra rubéola", doses: 2, periodicidade: Periodicidade.ANO, intervalo: 1 },
  { id: 12, titulo: "Vacina L", descricao: "Vacina contra o HPV", doses: 3, periodicidade: Periodicidade.MES, intervalo: 6 },
  { id: 13, titulo: "Vacina M", descricao: "Vacina contra a varicela", doses: 2, periodicidade: Periodicidade.SEMANA, intervalo: 10 },
  { id: 14, titulo: "Vacina N", descricao: "Vacina contra a gripe H1N1", doses: 1, periodicidade: Periodicidade.ANO, intervalo: 1 },
  { id: 15, titulo: "Vacina O", descricao: "Vacina contra a febre tifoide", doses: 3, periodicidade: Periodicidade.ANO, intervalo: 3 },
  { id: 16, titulo: "Vacina P", descricao: "Vacina contra a dengue", doses: 3, periodicidade: Periodicidade.DIA, intervalo: 45 },
  { id: 17, titulo: "Vacina Q", descricao: "Vacina contra a raiva", doses: 2, periodicidade: Periodicidade.MES, intervalo: 6 },
  { id: 18, titulo: "Vacina R", descricao: "Vacina contra a tuberculose", doses: 1, periodicidade: Periodicidade.ANO, intervalo: 0 },
  { id: 19, titulo: "Vacina S", descricao: "Vacina contra a cólera", doses: 2, periodicidade: Periodicidade.ANO, intervalo: 5 },
  { id: 20, titulo: "Vacina T", descricao: "Vacina contra o ebola", doses: 3, periodicidade: Periodicidade.SEMANA, intervalo: 5 },
]

export const vacinasDropdown : Vacina[] = [
  { id: 1, titulo: "Vacina A" },
  { id: 2, titulo: "Vacina B" },
  { id: 3, titulo: "Vacina C" },
  { id: 4, titulo: "Vacina D" },
  { id: 5, titulo: "Vacina E" },
  { id: 6, titulo: "Vacina F" },
  { id: 7, titulo: "Vacina G" },
  { id: 8, titulo: "Vacina H" },
  { id: 9, titulo: "Vacina I" },
  { id: 10, titulo: "Vacina J" },
  { id: 11, titulo: "Vacina K" },
  { id: 12, titulo: "Vacina L" },
  { id: 13, titulo: "Vacina M" },
  { id: 14, titulo: "Vacina N" },
  { id: 15, titulo: "Vacina O" },
  { id: 16, titulo: "Vacina P" },
  { id: 17, titulo: "Vacina Q" },
  { id: 18, titulo: "Vacina R" },
  { id: 19, titulo: "Vacina S" },
  { id: 20, titulo: "Vacina T" },
]
