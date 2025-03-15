import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectComponent } from '../add-project/add-project.component';

@Component({
  selector: 'app-chef-menu',
  templateUrl: './chef-menu.component.html',
  styleUrl: './chef-menu.component.css',
})
export class ChefMenuComponent {

  itemsGneralGroup = [
    { title: "Home", icon: "home", link: "/home" },
    { title: "Member", icon: "group", link: "/member" }
  ];

  projectList = [
    { projectName: "Sample Project" },
    { projectName: "Sample Project" },
    { projectName: "Sample Project" }
  ]

  constructor(public dialog: MatDialog) {}

  openAddProjectDialog(): void {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: '700px',
      height: '750px' 
    });

    
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Projet ajouté :', result);
        
        this.projectList.push({ projectName: result });
      }
    });
  }


}
