import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student-item';

@Component({
  selector: 'app-studentitem',
  templateUrl: './studentitem.component.html',
  styleUrls: ['./studentitem.component.css']
})
export class StudentitemComponent implements OnInit {

  @Input()
  public std!: Student;

  constructor() { }

  ngOnInit(): void {
  }

}
