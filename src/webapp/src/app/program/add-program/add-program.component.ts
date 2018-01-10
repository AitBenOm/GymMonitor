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
  exercises: ExerciseModel[]=null;
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

console.log(this.exercises);
this.programService.onProgramAdded.emit(new ProgramModel(this.programService.programs.length,
  this.programTitle,
  this.getToDayString(),
  this.getToDayString(),
  this.exercises
  ));
this.programTitle='';
  }
}
