import {Component} from '@angular/core';
import {Button} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {NgForOf} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';
import {menuRoutes} from '../../app.routes';
import {RouterLink, RouterOutlet} from '@angular/router';
import {LoginService} from '../../service/login.service';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    Button,
    DividerModule,
    NgForOf,
    PrimeTemplate,
    SidebarModule,
    RouterOutlet,
    RouterLink,
    ToastModule,
    ConfirmDialogModule
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css'
})
export class ShellComponent {
  constructor(private loginService: LoginService) {
  }

  icons: iconList = {
    vacinas: 'syringe',
    agendas: 'bookmark',
    alergias: 'coronavirus',
    usuarios: 'person'
  }

  selectedPage : string = 'agendas'

  getStyle(page: string){
    if(page == this.selectedPage){
      return {
        color: '#FFD54F'
      }
    }

    return {}
  }

  selectPage(e: Event, selectedPage: string){
    this.selectedPage = selectedPage
  }

  logout(){
    this.loginService.deslogar()
  }

  protected readonly menuRoutes = menuRoutes;
}

type iconList = {
  [key: string]: string
}

