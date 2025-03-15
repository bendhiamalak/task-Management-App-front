import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css',
})
export class AddProjectComponent {
  projectTitle: string = '';
  projectDescription: string = '';
  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(public dialogRef: MatDialogRef<AddProjectComponent>) {}

  onCancel(): void {
    this.dialogRef.close(); 
  }

  onSave(): void {
    if (this.projectTitle) {
      const projectData = {
        title: this.projectTitle,
        description: this.projectDescription,
        startDate: this.startDate,
        endDate: this.endDate,
      };
      this.dialogRef.close(projectData); 
    }
  }
}
