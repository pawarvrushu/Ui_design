import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from './sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent,RouterOutlet,HomeComponent,MatSidenavModule,MatButtonModule,MatIconModule,MatMenuModule,MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui';
}
