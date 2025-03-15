import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { LoginComponent } from './components/login/login.component';
import { ChefHomeComponent } from './components/chef-home/chef-home.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

const routes: Routes = [
  {path:"register",component:SubscriptionComponent},
  {path:"login",component:LoginComponent},
  {path:"chefHome",component:ChefHomeComponent},
  {path:"projectDetail", component:ProjectDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
