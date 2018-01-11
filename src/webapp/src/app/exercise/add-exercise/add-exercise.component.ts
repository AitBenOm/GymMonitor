import { Component, OnInit } from '@angular/core';
import {ExerciseModel} from "../exercise-model";

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  constructor() { }
  exerciseTitle: string='';
  ngOnInit() {
  }

}
