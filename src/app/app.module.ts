import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {ResumeComponent } from '../app/resume/resume.component';
import {SideBarComponent } from '../app/resume/sidebar/sidebar.component';
import {ExperienceComponent } from '../app/resume/experience/experience.component';
import {EducationComponent } from '../app/resume/education/education.component';
import {InterestsComponent } from '../app/resume/interests/interests.component';



const appRoutes: Routes = [
  { path: 'resume', component: ResumeComponent },
  { path: '**', component:ResumeComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    ResumeComponent,
    SideBarComponent,
    ExperienceComponent,
    EducationComponent,
    InterestsComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
