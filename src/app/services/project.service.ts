import { Injectable } from '@angular/core';
import { Project } from '../shared/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private selectedProject!: Project

  setSelectedProject(project: Project){
    this.selectedProject = project
  }

  getSelectedProject(): Project {
    if (!this.selectedProject) {
      throw new Error('No project selected');
    }
    return this.selectedProject;
  }
  
  constructor() { }
}
