import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MenuModule} from 'primeng/menu';
import {CommonModule} from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {AvatarModule} from 'primeng/avatar';
import {Button} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {DividerModule} from 'primeng/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MenuModule, CommonModule, SidebarModule, AvatarModule, Button, Ripple, DividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

}
