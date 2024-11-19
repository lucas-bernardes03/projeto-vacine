import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {AgendaService} from '../../service/agenda.service';
import {Agenda} from '../../interface/agenda';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {Button} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';

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
    TooltipModule
  ],
  templateUrl: './agendas.component.html',
  styleUrl: './agendas.component.css'
})
export class AgendasComponent implements OnInit{
  private readonly _agendaService: AgendaService;
  agendas!: Agenda[];

  constructor(agendaService: AgendaService) {
    this._agendaService = agendaService;
  }

  ngOnInit() {
    this.agendas = this._agendaService.getAgendas()
  }
}
