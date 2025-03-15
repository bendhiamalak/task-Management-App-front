import { Task } from "./task";
 

export class Project {
    id?:number;
    title?:string;
    description?:string;
    image?:string;
    nbreCollaborateurs?:number;
    dateDebut?:Date;
    dateFin?:Date;
    listTask:Task[]=[]
}
