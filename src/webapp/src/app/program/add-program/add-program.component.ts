import { Component, OnInit } from '@angular/core';
import {ProgramService} from "../program.service";
import {ProgramModel} from "../program-model";
import {ExerciseModel} from "../../exercise/exercise-model";

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.css']
})
export class AddProgramComponent implements OnInit {

  constructor(private programService: ProgramService) { }
  programTitle: string;
  program: ProgramModel;
  exercises: ExerciseModel[];
  ngOnInit() {
  }

  getToDayString(){
    let toDay = new Date();
    let dd: any = toDay.getDay();
    let mm: any= toDay.getMonth()+1;
    let yyyy: any= toDay.getFullYear();

    if(dd<10){
      dd='0'+dd;
    }
    if (mm<10){
      mm='0'+mm;
    }

    return mm+'/'+dd+'/'+yyyy;
  }
  onAddProgram(){

    this.program.name=this.programTitle;
    this.program.id=this.programService.programs.length;
    this.program.creationDate=this.getToDayString();
    this.program.lastModification=this.getToDayString();
    this.program.exercises=this.exercises;

this.programService.onProgramAdded.emit(this.program);
  }
}
