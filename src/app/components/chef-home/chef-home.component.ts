import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Project } from '../../shared/project';
import { DifficultyLevel, StatusType, Task, TypeOfTask } from '../../shared/task';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
@Component({
  selector: 'app-chef-home',
  templateUrl: './chef-home.component.html',
  styleUrl: './chef-home.component.css',
 
})
export class ChefHomeComponent implements OnInit, AfterViewInit {
  
  activeProjects: Project [] = []; 
  activeTasks:Task [] = [];

  constructor(private router : Router , private projectService: ProjectService) { }
  ngOnInit(): void {
    this.activeProjects = [
      {
        title: "firstProject",
        description: "firstProjectDescription",
        image: "projectsImages/projectImage.webp",
        nbreCollaborateurs: 5,
        dateFin: new Date(),
        listTask: [ 
          {
            id: 1,
            title: "Développer la page d'accueil",
            difficultyLevel: DifficultyLevel.Medium,
            type: TypeOfTask.Frontend,
            description: "Créer une interface utilisateur réactive et attrayante pour la page d'accueil.",
            startDate: new Date('2025-03-01'),
            endDate: new Date('2025-03-10'),
            status: StatusType.InProgress,
            image: 'projectsImages/projectImage.webp',
            peopleId: [101, 102],
            projectId: 0
          },
          {
            id: 1,
            title: "Développer la page d'accueil",
            difficultyLevel: DifficultyLevel.Medium,
            type: TypeOfTask.Frontend,
            description: "Créer une interface utilisateur réactive et attrayante pour la page d'accueil.",
            startDate: new Date('2025-03-01'),
            endDate: new Date('2025-03-10'),
            status: StatusType.InProgress,
            image: 'projectsImages/projectImage.webp',
            peopleId: [101, 102],
            projectId: 0
          },
          {
            id: 1,
            title: "Développer la page d'accueil",
            difficultyLevel: DifficultyLevel.Medium,
            type: TypeOfTask.Frontend,
            description: "Créer une interface utilisateur réactive et attrayante pour la page d'accueil.",
            startDate: new Date('2025-03-01'),
            endDate: new Date('2025-03-10'),
            status: StatusType.InProgress,
            image: 'projectsImages/projectImage.webp',
            peopleId: [101, 102],
            projectId: 0
          },
          {
            id: 1,
            title: "Développer la page d'accueil",
            difficultyLevel: DifficultyLevel.Medium,
            type: TypeOfTask.Frontend,
            description: "Créer une interface utilisateur réactive et attrayante pour la page d'accueil.",
            startDate: new Date('2025-03-01'),
            endDate: new Date('2025-03-10'),
            status: StatusType.InProgress,
            image: 'projectsImages/projectImage.webp',
            peopleId: [101, 102],
            projectId: 0
          }
        ]
      },
      {
        title: "secondProject",
        description: "secondProjectDescription",
        image: "",
        nbreCollaborateurs: 5,
        dateDebut: new Date(),
        dateFin: new Date(),
        listTask: [] 
      }
    ];
  
    this.activeTasks = [
      {
        id: 1,
        title: "Développer la page d'accueil",
        difficultyLevel: DifficultyLevel.Medium,
        type: TypeOfTask.Frontend,
        description: "Créer une interface utilisateur réactive et attrayante pour la page d'accueil.",
        startDate: new Date('2025-03-01'),
        endDate: new Date('2025-03-10'),
        status: StatusType.InProgress,
        image: 'projectsImages/projectImage.webp',
        peopleId: [101, 102],
        projectId: 0
      },
      {
        id: 2,
        title: "Implémenter l'API d'authentification",
        difficultyLevel: DifficultyLevel.Hard,
        type: TypeOfTask.Backend,
        description: "Développer un système d'authentification sécurisé avec JWT.",
        startDate: new Date('2025-03-05'),
        endDate: new Date('2025-03-15'),
        status: StatusType.ToDo,
        image: 'projectsImages/projectImage.webp',
        peopleId: [103],
        projectId: 0
      },
      {
        id: 3,
        title: "Écrire des tests unitaires pour le backend",
        difficultyLevel: DifficultyLevel.Medium,
        type: TypeOfTask.Testing,
        description: "Ajouter des tests unitaires pour les services et contrôleurs de l'API.",
        startDate: new Date('2025-03-02'),
        endDate: new Date('2025-03-12'),
        status: StatusType.UnderReview,
        image: 'projectsImages/projectImage.webp',
        peopleId: [104, 105],
        projectId: 0
      },
      {
        id: 4,
        title: "Déployer l'application sur AWS",
        difficultyLevel: DifficultyLevel.Hard,
        type: TypeOfTask.DevOps,
        description: "Configurer l'infrastructure et automatiser le déploiement avec CI/CD.",
        startDate: new Date('2025-03-10'),
        endDate: new Date('2025-03-20'),
        status: StatusType.ToDo,
        image: 'projectsImages/projectImage.webp',
        peopleId: [106],
        projectId: 0
      },
      {
        id: 5,
        title: "Créer une charte graphique",
        difficultyLevel: DifficultyLevel.Easy,
        type: TypeOfTask.Design,
        description: "Élaborer une charte graphique cohérente avec les besoins du projet.",
        startDate: new Date('2025-03-01'),
        endDate: new Date('2025-03-05'),
        status: StatusType.Completed,
        image: 'projectsImages/projectImage.webp',
        peopleId: [107, 108],
        projectId: 0
      }
    ];
  }

  

  ngAfterViewInit(): void {
    const swiperEl = document.querySelector('swiper-container');

    if (swiperEl) {
      Object.assign(swiperEl, {
        slidesPerView: 1,
        breakpoints: {
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
        on: {
          init() {
            console.log('Swiper initialized');
          },
        },
      });
      swiperEl.initialize();
    }
  }

  navigateToProjectDetail(project: Project){
    this.projectService.setSelectedProject(project)
    this.router.navigate(['/projectDetail'])
  }
}
