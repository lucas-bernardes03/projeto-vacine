import {Component, ViewChild} from '@angular/core';
import {Button} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {NgForOf} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';
import {Sidebar, SidebarModule} from 'primeng/sidebar';
import {menuRoutes} from '../../app.routes';
import {RouterLink, RouterOutlet} from '@angular/router';

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
    RouterLink
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css'
})
export class ShellComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  icons: iconList = {
    vacinas: 'syringe',
    agendas: 'bookmark',
    alergias: 'coronavirus',
    usuarios: 'person'
  }

  selectedPage : string = 'agendas'
  sidebarVisible: boolean = true;

  getStyle(page: string){
    if(page == this.selectedPage){
      return {
        color: '#FFD54F'
      }
    }

    return {}
  }

  closeSidebar(e: Event, selectedPage: string){
    this.sidebarRef.close(e)
    this.selectedPage = selectedPage
  }

  protected readonly menuRoutes = menuRoutes;
}

type iconList = {
  [key: string]: string
}

