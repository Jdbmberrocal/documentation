import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './tools.component';
import { ToolsListComponent } from './tools-list/tools-list.component';


const routes: Routes = [
    {
      path: '',
      component: ToolsComponent,
      children: [
        {
          path: 'list',
          component: ToolsListComponent
        },
        {
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        },
        {
          path: '**',
          redirectTo: 'list',
          pathMatch: 'full'
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
