import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentitemComponent } from './studentitem/studentitem.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    StudentlistComponent,
    StudentitemComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    StudentlistComponent,
    StudentitemComponent
  ]
})
export class StudentModule { }
