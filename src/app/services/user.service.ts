import { Injectable } from '@angular/core';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList:User[]=[]
  constructor() { }
  register(user:User){
    this.userList.push(user)
    console.log("user Created !!!")
    
  }
}
