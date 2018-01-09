import { Component, OnInit } from '@angular/core';
import {ExerciseService} from "./exercise.service";
import {ExerciseModel} from "./exercise-model";
import {ProgramService} from "../program/program.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  exercise: ExerciseModel;
  subsrciption: Subscription;
  constructor(private programService: ProgramService) {

   this.subsrciption= programService.exerciseToShow.subscribe(
     (exercise: ExerciseModel) =>{
       console.log(this.exercise);
       this.exercise=exercise;
     }
   )

  }

  ngOnInit() {

  }

}
