import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeroComponent } from './about-hero/about-hero.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { AboutMissionComponent } from './about-mission/about-mission.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    AboutHeroComponent,
    OurStoryComponent,
    AboutMissionComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}
