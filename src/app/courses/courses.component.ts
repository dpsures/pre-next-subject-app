import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Course } from "../shared/model/courses";

@Component({
  selector: 'course',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {

  @Input()
  course: Course;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    
  }

}
