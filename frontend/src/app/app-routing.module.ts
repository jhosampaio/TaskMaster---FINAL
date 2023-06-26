import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DescriptionComponent } from './components/pages/description/description.component';
import { ReadmeComponent } from './components/pages/readme/readme.component';
import { TasksComponent } from './components/pages/tasks/tasks.component';
import { AddEditTaskComponent } from './components/pages/add-edit-task/add-edit-task.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { TaskPageComponent } from './components/task-page/task-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'description', component: DescriptionComponent},
  {path: 'readme', component: ReadmeComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'task/:id', component: TaskPageComponent},
  {path: 'add-edit', component: AddEditTaskComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
