import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';

import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { ChefHeaderComponent } from './components/chef-header/chef-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { ChefHomeComponent } from './components/chef-home/chef-home.component';
import { ChefMenuComponent } from './components/chef-menu/chef-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActiveProjetCardComponent } from './components/active-projet-card/active-projet-card.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ActiveTaskCardComponent } from './components/active-task-card/active-task-card.component';

import { register } from 'swiper/element/bundle';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';


import { DragDropModule } from '@angular/cdk/drag-drop';
register();

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SubscriptionComponent,
    ChefHeaderComponent,
    ChefMenuComponent,
    ActiveProjetCardComponent,
    AddProjectComponent,
    ActiveTaskCardComponent,
    ChefHomeComponent,
    ProjectDetailComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatDividerModule,
    FormsModule,
    MatToolbarModule,
    MatBadgeModule,
    MatListModule,
    MatSidenavModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatDatepickerModule,
    DragDropModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
