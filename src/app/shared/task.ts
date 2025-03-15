export enum DifficultyLevel {
    Easy = "Easy",
    Medium = "Medium",
    Hard = "Hard"
}

export enum TypeOfTask {
    Frontend = "Frontend",
    Backend = "Backend",
    Testing = "Testing",
    DevOps = "DevOps",
    Design = "Design"
}

export enum StatusType {
    ToDo = "To Do",
    Completed = "Completed",
    UnderReview = "Under Review",
    InProgress = "In Progress"
}

export class Task {
    id!: number;
    title!: string;
    difficultyLevel!: DifficultyLevel;
    type!: TypeOfTask;
    description!: string;
    image:string='projectsImages/projectImage.webp';
    startDate!: Date;
    endDate!: Date;
    status!: StatusType;
    projectId!:number
    peopleId!:number[]
}
