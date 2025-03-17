import { Component, Inject } from '@angular/core';
import { DifficultyLevel, StatusType, TypeOfTask } from '../../shared/task';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  DifficultyLevel=DifficultyLevel
  selectedDifficulty:DifficultyLevel =DifficultyLevel.Medium

  StatusType=StatusType 
  selectedStatusType:StatusType = StatusType.ToDo

  TypeOfTask=TypeOfTask
  selectedTypeOfTask!:TypeOfTask
  
  //constructor(public dialogRef:MatDialogRef <AddTaskComponent> , @Inject(MAT_DIALOG_DATA) public data:any)
  
  getDifficultyLevels(): string[] {
    return Object.values(DifficultyLevel);
  }

  getStatusType():string[]{
    return Object.values(StatusType)
  }

  getTypeOfTask():string[]{
    return Object.values(TypeOfTask)
  }
}
