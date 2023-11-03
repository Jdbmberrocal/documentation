import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToolsService } from '../_services/tools.service';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.css']
})
export class ToolsListComponent {

  constructor(
    public _toolsService: ToolsService,
    public modelService: NgbModal,
    ){}

  ngOnInit(): void{

  }

  addTool(){

  }

}
