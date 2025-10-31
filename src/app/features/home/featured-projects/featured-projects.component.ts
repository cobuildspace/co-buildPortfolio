import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-projects',
  imports: [CommonModule],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.css'
})
export class FeaturedProjectsComponent {
  faqs = [
    {
      question: "What services does Cobuild Services provide?",
      answer: "Cobuild Services offers a range of services including design, engineering, and project management. We specialize in Angular development, bug fixing and optimization, custom UI components, and Angular upgrades & migration.",
      isOpen: false
    },
    {
      question: "How quickly can you fix Angular errors and bugs?",
      answer: "We understand urgent issues need quick resolution. Most bug fixes can be completed within 24-48 hours. For critical production issues, we provide expedited support with faster turnarounds.",
      isOpen: false
    },
    {
      question: "Do you work with existing Angular projects or only new ones?",
      answer: "We work with both! Whether you have a legacy Angular app that needs updating, an existing project with bugs, or a completely new build from scratch, we can help. Our team specializes in migrating older Angular projects to the latest versions.",
      isOpen: false
    },
    {
      question: "What Angular versions do you support?",
      answer: "We specialize in all modern Angular versions (Angular 2+) including the latest Angular 19. Our team has expertise in migrating AngularJS applications to modern Angular, as well as upgrading projects from older Angular versions to the current one.",
      isOpen: false
    },
    {
      question: "How do you handle project collaboration and communication?",
      answer: "Collaboration is at the core of what we do. We provide regular updates, use your preferred communication tools (Slack, Teams, etc.), and work closely with your team throughout the development process. We're not just developers - we're your partners in building great products.",
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
