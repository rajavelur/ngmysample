import { Component, OnInit } from '@angular/core';
import { Student } from '../student-item';
import { StudentService } from '../../services/student.service'

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  stdList: Student[] = [];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getAll().subscribe(data => {
      this.stdList = data;
    });
  }

}
