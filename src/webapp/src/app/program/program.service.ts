import {EventEmitter, Injectable} from '@angular/core';
import {ProgramModel} from "./program-model";
import {getTemplate} from "codelyzer/util/ngQuery";
import {ExerciseModel} from "../exercise/exercise-model";
import {LoadsModel} from "../exercise/loads-model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ProgramService {

  constructor() {
  }

  onProgramAdded= new EventEmitter<ProgramModel>();
  onProgramChosen= new EventEmitter<ProgramModel>();
  exerciseToShow = new Subject<ExerciseModel>();

  getToDayString() {
    let toDay = new Date();
    let dd: any = toDay.getDay();
    let mm: any = toDay.getMonth() + 1;
    let yyyy: any = toDay.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }

    return mm + '/' + dd + '/' + yyyy;
  }

  programs: ProgramModel[] = [
    new ProgramModel(1, 'Pec', this.getToDayString(), this.getToDayString(), [
      new ExerciseModel(1, 'Halter', [
        new LoadsModel(1, '10', this.getToDayString()),
        new LoadsModel(1, '15', this.getToDayString()),
        new LoadsModel(1, '20', this.getToDayString())]),
      new ExerciseModel(1, "developpé couché", [
        new LoadsModel(1, '30', this.getToDayString()),
        new LoadsModel(1, '40', this.getToDayString())]),
      new ExerciseModel(1, "developpé incliné", [
        new LoadsModel(1, '40', this.getToDayString()),
        new LoadsModel(1, '60', this.getToDayString()),
        new LoadsModel(1, '50', this.getToDayString())])
    ]),

    new ProgramModel(2, 'Jambe', this.getToDayString(), this.getToDayString(), [

    ]),

    new ProgramModel(3, 'Biceps', this.getToDayString(), this.getToDayString(), [new ExerciseModel(1, "tirage biceps", [
      new LoadsModel(1, '18', this.getToDayString()),
      new LoadsModel(1, '20', this.getToDayString()),
      new LoadsModel(1, '23', this.getToDayString())])
    ]),


  ];

  getProgramById(id: number) {
    return this.programs[id];
  }

  showDetailExercise(exercise: ExerciseModel) {
    this.exerciseToShow.next(exercise);
  }
addProgram(program: ProgramModel){
    this.programs.push(program);
}
}
