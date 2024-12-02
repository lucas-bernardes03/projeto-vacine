import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {DatePipe} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {VacinaService} from '../../service/vacina.service';
import {Periodicidade, Vacina} from '../../interface/vacina';
import {TooltipModule} from 'primeng/tooltip';

@Component({
  selector: 'app-vacinas',
  standalone: true,
  imports: [
    Button,
    DatePipe,
    PrimeTemplate,
    TableModule,
    TooltipModule
  ],
  templateUrl: './vacinas.component.html',
  styleUrl: './vacinas.component.css'
})
export class VacinasComponent implements OnInit{
  vacinas!: Vacina[];

  constructor(private vacinaService: VacinaService) {
  }

  ngOnInit() {
    this.vacinaService.getVacinas().subscribe({
      next: result => this.vacinas = result
    })
  }

  protected readonly Periodicidade = Periodicidade;
}
