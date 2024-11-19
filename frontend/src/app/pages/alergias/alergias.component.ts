import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {TooltipModule} from "primeng/tooltip";
import {AlergiaService} from '../../service/alergia.service';
import {Alergia} from '../../interface/alergia';

@Component({
  selector: 'app-alergias',
  standalone: true,
    imports: [
        Button,
        PrimeTemplate,
        TableModule,
        TooltipModule
    ],
  templateUrl: './alergias.component.html',
  styleUrl: './alergias.component.css'
})
export class AlergiasComponent implements OnInit{
  private readonly _alergiaService: AlergiaService
  alergias!: Alergia[]

  constructor(alergiaService: AlergiaService) {
    this._alergiaService = alergiaService
  }

  ngOnInit() {
    this.alergias = this._alergiaService.getAlergias()
  }
}
