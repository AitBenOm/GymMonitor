import {ExerciseModel} from "../exercise/exercise-model";

export class ProgramModel {
  get lastModification(): string {
    return this._lastModification;
  }

  set lastModification(value: string) {
    this._lastModification = value;
  }
  private _id: number;
  private _name: string;
  private _creationDate: string;
  private _lastModification: string;
  private  _exercises: ExerciseModel[];



  constructor(id: number, name: string, creationDate: string, lastModification: string, exercises: ExerciseModel[]) {
    this._id = id;
    this._name = name;
    this._creationDate = creationDate;
    this._lastModification = lastModification;
    this._exercises = exercises;
  }


  get exercises(): ExerciseModel[] {
    return this._exercises;
  }

  set exercises(value: ExerciseModel[]) {
    this._exercises = value;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get creationDate(): string {
    return this._creationDate;
  }

  set creationDate(value: string) {
    this._creationDate = value;
  }
}
