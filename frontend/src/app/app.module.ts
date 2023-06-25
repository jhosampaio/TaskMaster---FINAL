import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DescriptionComponent } from './components/pages/description/description.component';
import { ReadmeComponent } from './components/pages/readme/readme.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEditTaskComponent } from './components/pages/add-edit-task/add-edit-task.component';
import { TasksComponent } from './components/pages/tasks/tasks.component';
import { ProfileComponent } from './components/pages/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DescriptionComponent,
    ReadmeComponent,
    AboutComponent,
    ContactComponent,
    AddEditTaskComponent,
    TasksComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule, ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
