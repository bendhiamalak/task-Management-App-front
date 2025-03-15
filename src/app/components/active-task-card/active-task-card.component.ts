import { Component, Input } from '@angular/core';
import { Task } from '../../shared/task';

@Component({
  selector: 'app-active-task-card',
  templateUrl: './active-task-card.component.html',
  styleUrl: './active-task-card.component.css'
})
export class ActiveTaskCardComponent {
  @Input() task!:Task

}
