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

export const agendas: Agenda[] = [
  { id: 1, data: new Date('2024-11-20T10:00:00'), situacao: 'Agendada', observacoes: 'Paciente precisa levar exames prévios.', vacina: { id: 1, titulo: 'Vacina contra a Gripe' }, usuario: { id: 1, nome: 'João da Silva' } },
  { id: 2, data: new Date('2024-11-22T15:30:00'), situacao: 'Cancelada', observacoes: 'Paciente não compareceu na data agendada.', vacina: { id: 2, titulo: 'Vacina contra COVID-19' }, usuario: { id: 2, nome: 'Maria Oliveira' } },
  { id: 3, data: new Date('2024-11-25T09:00:00'), situacao: 'Realizada', observacoes: 'Paciente foi vacinado sem reações adversas.', vacina: { id: 3, titulo: 'Vacina contra Hepatite B' }, usuario: { id: 3, nome: 'Carlos Souza' } },
  { id: 4, data: new Date('2024-11-26T10:00:00'), situacao: 'Agendada', observacoes: 'Aguardar confirmação de horário.', vacina: { id: 1, titulo: 'Vacina contra a Gripe' }, usuario: { id: 4, nome: 'Ana Costa' } },
  { id: 5, data: new Date('2024-11-27T08:00:00'), situacao: 'Realizada', observacoes: 'Paciente vacinado com sucesso.', vacina: { id: 2, titulo: 'Vacina contra COVID-19' }, usuario: { id: 5, nome: 'José Pereira' } },
  { id: 6, data: new Date('2024-11-28T16:30:00'), situacao: 'Agendada', observacoes: 'Lembrar de trazer documentação atualizada.', vacina: { id: 3, titulo: 'Vacina contra Hepatite B' }, usuario: { id: 6, nome: 'Beatriz Lima' } },
  { id: 7, data: new Date('2024-11-29T13:00:00'), situacao: 'Realizada', observacoes: 'Nenhuma reação adversa, tudo tranquilo.', vacina: { id: 1, titulo: 'Vacina contra a Gripe' }, usuario: { id: 7, nome: 'Paulo Silva' } },
  { id: 8, data: new Date('2024-11-30T11:15:00'), situacao: 'Cancelada', observacoes: 'Paciente pediu para remarcar para a próxima semana.', vacina: { id: 2, titulo: 'Vacina contra COVID-19' }, usuario: { id: 8, nome: 'Roberta Santos' } },
  { id: 9, data: new Date('2024-12-01T10:30:00'), situacao: 'Agendada', observacoes: 'Aguardando confirmação do médico.', vacina: { id: 3, titulo: 'Vacina contra Hepatite B' }, usuario: { id: 9, nome: 'Ricardo Almeida' } },
  { id: 10, data: new Date('2024-12-02T14:45:00'), situacao: 'Realizada', observacoes: 'Paciente se sentiu bem após a vacina.', vacina: { id: 1, titulo: 'Vacina contra a Gripe' }, usuario: { id: 10, nome: 'Fernanda Oliveira' } },
  { id: 11, data: new Date('2024-12-03T09:00:00'), situacao: 'Agendada', observacoes: 'Confirmar presença um dia antes.', vacina: { id: 2, titulo: 'Vacina contra COVID-19' }, usuario: { id: 11, nome: 'Gustavo Ferreira' } },
  { id: 12, data: new Date('2024-12-04T16:00:00'), situacao: 'Realizada', observacoes: 'Paciente tranquilo, sem efeitos colaterais.', vacina: { id: 3, titulo: 'Vacina contra Hepatite B' }, usuario: { id: 12, nome: 'Júlia Barbosa' } },
  { id: 13, data: new Date('2024-12-05T10:30:00'), situacao: 'Cancelada', observacoes: 'Paciente não compareceu e não avisou com antecedência.', vacina: { id: 1, titulo: 'Vacina contra a Gripe' }, usuario: { id: 13, nome: 'Lucas Martins' } },
  { id: 14, data: new Date('2024-12-06T11:45:00'), situacao: 'Realizada', observacoes: 'Tudo ocorreu conforme esperado, sem complicações.', vacina: { id: 2, titulo: 'Vacina contra COVID-19' }, usuario: { id: 14, nome: 'Mariana Souza' } },
  { id: 15, data: new Date('2024-12-07T09:30:00'), situacao: 'Agendada', observacoes: 'Paciente precisa de uma nova ficha de acompanhamento.', vacina: { id: 3, titulo: 'Vacina contra Hepatite B' }, usuario: { id: 15, nome: 'Eduardo Lima' } },
  { id: 16, data: new Date('2024-12-08T13:00:00'), situacao: 'Realizada', observacoes: 'Paciente passou por consulta e foi vacinado com sucesso.', vacina: { id: 1, titulo: 'Vacina contra a Gripe' }, usuario: { id: 16, nome: 'Simone Costa' } },
  { id: 17, data: new Date('2024-12-09T15:30:00'), situacao: 'Cancelada', observacoes: 'Paciente solicitou novo agendamento para outra data.', vacina: { id: 2, titulo: 'Vacina contra COVID-19' }, usuario: { id: 17, nome: 'Ricardo Martins' } },
  { id: 18, data: new Date('2024-12-10T08:15:00'), situacao: 'Agendada', observacoes: 'Confirmar os exames antes da vacinação.', vacina: { id: 3, titulo: 'Vacina contra Hepatite B' }, usuario: { id: 18, nome: 'Tatiane Oliveira' } },
  { id: 19, data: new Date('2024-12-11T14:00:00'), situacao: 'Realizada', observacoes: 'Sem intercorrências, paciente tranquilo após a vacina.', vacina: { id: 1, titulo: 'Vacina contra a Gripe' }, usuario: { id: 19, nome: 'Rafael Sousa' } },
  { id: 20, data: new Date('2024-12-12T09:00:00'), situacao: 'Agendada', observacoes: 'Aguardar chegada do paciente, horário confirmado.', vacina: { id: 2, titulo: 'Vacina contra COVID-19' }, usuario: { id: 20, nome: 'Juliana Silva' } }
];
