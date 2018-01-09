import { Component, OnInit } from '@angular/core';
import {ProgramService} from "../program.service";
import {ProgramModel} from "../program-model";

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css'],
  providers: [ProgramService]
})
export class ProgramListComponent implements OnInit {

  programs: ProgramModel[];
  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.programs=this.programService.programs;
  }

  onShowDetail(id: number){
    console.log(id)
  }

}
