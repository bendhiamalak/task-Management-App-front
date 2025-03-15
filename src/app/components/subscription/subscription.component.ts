import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent implements OnInit{

  public user: User = {};
  public radioBtnValue:string='';
  public hidePassword=true;    
  public error=[]

  constructor(public router:Router,public userService:UserService){}
  ngOnInit(): void {}

  togglePasswordVisibility(){}

  register(){
    if (this.radioBtnValue==="0"){
      this.user.isMember=false
    }else{
      this.user.isMember=true
    }
    this.userService.register(this.user)
    if (this.radioBtnValue==="0"){
    this.router.navigate(['chefHome'])}
    else{
      this.router.navigate(['memberHome'])
    }
  }

  cancel(){
    this.router.navigate(['login'])
  }
}

