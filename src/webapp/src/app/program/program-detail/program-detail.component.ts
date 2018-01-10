import { Component, OnInit } from '@angular/core';
import {ProgramService} from "../program.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProgramModel} from "../program-model";
import {ExerciseModel} from "../../exercise/exercise-model";
import {ExerciseService} from "../../exercise/exercise.service";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {

  id: number;
  program: ProgramModel;

  showDetail: boolean = false;



  constructor(private programService: ProgramService,
              private exerciseService: ExerciseService,
              private route: ActivatedRoute,

             ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.program = this.programService.getProgramById(this.id);
        }
      );
this.programService.exerciseToShow.next(null);

  }
  onShowDetail(exercise:ExerciseModel){
    console.log("program-detail "+exercise.name);
   this.programService.showDetailExercise(exercise);
  }

}
