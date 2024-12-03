import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {AlergiaService} from '../../../service/alergia.service';
import {MessageService} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-editar-alergia',
  standalone: true,
  imports: [
    Button,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  templateUrl: './editar-alergia.component.html',
  styleUrl: './editar-alergia.component.css'
})
export class EditarAlergiaComponent implements OnInit{
 form!: FormGroup

  constructor(public ref : DynamicDialogRef,
              public config : DynamicDialogConfig,
              private alergiaServico: AlergiaService,
              private messageService: MessageService) {
  }

  ngOnInit() {
   this.form = new FormGroup<any>({
     id: new FormControl<Number | null>(null),
     nome: new FormControl<String | null>(null)
   })

    if(this.config.data) this.popularForm()
  }

  popularForm(){
    this.form.get('id')?.patchValue(this.config.data.id)
    this.form.get('nome')?.patchValue(this.config.data.nome)
  }

  validarForm(): boolean{
    if(!this.form.get('nome')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Nome é obrigatório'})
      return false
    }

    return true
  }

  cadastrarAlergia(){
    if(!this.validarForm()) return

    if(this.form.value.id){
      this.alergiaServico.novaAlergia(this.form.value).subscribe({
        next: () => {
          this.ref.close(true)
        },
        error: () => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao inserir alergia'})
        }
      })
    }
    else {
      this.alergiaServico.salvarAlergia(this.form.value).subscribe({
        next: () => {
          this.ref.close(true)
        },
        error: () => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao alterar alergia'})
        }
      })
    }
  }
}
