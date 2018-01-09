import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ProgramComponent } from './program/program.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './Auth/login/login.component';


import { RegisterComponent } from './Auth/register/register.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./user/user.service";
import { AddProgramComponent } from './program/add-program/add-program.component';
import { ProgramListComponent } from './program/program-list/program-list.component';
import { ProgramDetailComponent } from './program/program-detail/program-detail.component';
import { ProgramItemComponent } from './program/program-list/program-item/program-item.component';
import {ProgramService} from "./program/program.service";
import { ExerciseListComponent } from './exercise/exercise-list/exercise-list.component';
import {ExerciseService} from "./exercise/exercise.service";






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    ProgramComponent,
    ExerciseComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AddProgramComponent,
    ProgramListComponent,
    ProgramDetailComponent,
    ProgramItemComponent,
    ExerciseListComponent




  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UserService,ProgramService,ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
