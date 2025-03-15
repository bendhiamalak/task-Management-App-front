import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  user:User=new User();
  constructor(public router:Router,public userService:UserService){}
  ngOnInit(): void {
      
  }
  login(){}
  register(){
    this.router.navigate(['register'])
  }

  
  



}
