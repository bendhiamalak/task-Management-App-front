import { Component, Input } from '@angular/core';
import { Project } from '../../shared/project';

@Component({
  selector: 'app-active-projet-card',
  templateUrl: './active-projet-card.component.html',
  styleUrl: './active-projet-card.component.css'
})
export class ActiveProjetCardComponent {

  @Input() projet!: Project;

}
