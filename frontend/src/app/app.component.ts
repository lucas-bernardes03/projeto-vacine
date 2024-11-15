import {Component, ViewChild} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MenuModule} from 'primeng/menu';
import {CommonModule} from '@angular/common';
import {Sidebar, SidebarModule} from 'primeng/sidebar';
import {AvatarModule} from 'primeng/avatar';
import {Button} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {routes} from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MenuModule, CommonModule, SidebarModule, AvatarModule, Button, Ripple],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  sidebarVisible: boolean = true;

  closeSidebar(e: Event){
    this.sidebarRef.close(e)
  }

  protected readonly routes = routes;
  protected readonly event = event;
}
