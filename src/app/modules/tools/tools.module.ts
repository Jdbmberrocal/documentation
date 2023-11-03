import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToolsRoutingModule } from './tools-routing.module';
import { ToolsComponent } from './tools.component';
import { ToolsListComponent } from './tools-list/tools-list.component';
import { AddToolsComponent } from './components/add-tools/add-tools.component';
import { DeleteToolsComponent } from './components/delete-tools/delete-tools.component';
import { EditToolsComponent } from './components/edit-tools/edit-tools.component';


import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ToolsComponent,
    ToolsListComponent,
    AddToolsComponent,
    DeleteToolsComponent,
    EditToolsComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class ToolsModule { }
