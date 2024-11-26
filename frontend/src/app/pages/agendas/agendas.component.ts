import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {AgendaService} from '../../service/agenda.service';
import {Agenda} from '../../interface/agenda';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {Button} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {EditarAgendaComponent} from './editar-agenda/editar-agenda.component';
import {Usuario} from '../../interface/usuario';
import {Vacina} from '../../interface/vacina';
import {VacinaService} from '../../service/vacina.service';
import {UsuarioService} from '../../service/usuario.service';

@Component({
  selector: 'app-agendas',
  standalone: true,
  imports: [
    TableModule,
    NgForOf,
    DatePipe,
    Button,
    NgClass,
    NgIf,
    TooltipModule,
    DialogModule,
  ],
  templateUrl: './agendas.component.html',
  styleUrl: './agendas.component.css',
})
export class AgendasComponent implements OnInit{
  private readonly _agendaService: AgendaService
  private readonly _dialogService: DialogService

  agendas!: Agenda[];

  ref: DynamicDialogRef | undefined

  constructor(agendaService: AgendaService,
              dialogService : DialogService,
              ) {
    this._agendaService = agendaService;
    this._dialogService = dialogService;

  }

  ngOnInit() {
    this.agendas = this._agendaService.getAgendas()

  }

  adicionar(){
    this.ref = this._dialogService.open(EditarAgendaComponent, {
      header: 'Novo Agendamento',
      width: '18vw',
      height: '50vh'
    })
  }
}
