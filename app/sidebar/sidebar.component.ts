import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
//import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule,MatMenuModule,MatIconModule,MatButtonModule,MatToolbarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
