import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../shared/project';
import { Task, StatusType } from '../../shared/task';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  project: Project=new Project();
  projectTasks: Task[] = [];

  todoList: Task[] = [];
  inProgressList: Task[] = [];
  underReviewList: Task[] = [];
  completedList: Task[] = [];

 
  toDo = StatusType.ToDo;
  inProgress = StatusType.InProgress;
  underReview = StatusType.UnderReview;
  completed = StatusType.Completed;

  constructor(private projectService: ProjectService, private dialog: MatDialog) {}

  ngOnInit(): void {
   
    this.project = this.projectService.getSelectedProject();
    this.projectTasks = this.project.listTask;

    
    for (let task of this.projectTasks) {
      if (task.status === StatusType.ToDo) {
        this.todoList.push(task);
      } else if (task.status === StatusType.InProgress) {
        this.inProgressList.push(task);
      } else if (task.status === StatusType.UnderReview) {
        this.underReviewList.push(task);
      } else if (task.status === StatusType.Completed) {
        this.completedList.push(task);
      }
    }
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
     
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const task = event.container.data[event.currentIndex];
      if (event.container.id === 'todoList') {
        task.status = StatusType.ToDo;
      } else if (event.container.id === 'inProgressList') {
        task.status = StatusType.InProgress;
      } else if (event.container.id === 'underReviewList') {
        task.status = StatusType.UnderReview;
      } else if (event.container.id === 'completedList') {
        task.status = StatusType.Completed;
      }
      console.log("status:" ,task.status)
    }
  }

  trackById(index: number, task: Task): number {
    return task.id;
  }

  openAddTask(){
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '500px',
      data:{task:{}}
  })
}

}