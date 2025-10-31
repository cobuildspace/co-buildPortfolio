import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesHeroComponent } from './services-hero/services-hero.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ToolsUsedComponent } from './tools-used/tools-used.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    ServicesHeroComponent,
    ServicesListComponent,
    ToolsUsedComponent
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

}
