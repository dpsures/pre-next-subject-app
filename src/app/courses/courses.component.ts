import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from "./courses.service";
import { Subscription } from "rxjs/Subscription";
import { Course } from "../shared/model/courses";

@Component({
  selector: 'course',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {

  _watcher : Subscription;
  _currentCourses : Course[];

  constructor(private _courseService : CoursesService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(){
    this._watcher = this._courseService.getCourses()
    .subscribe(courses => {
      this._currentCourses = courses;
    });
  }

  ngOnDestroy() {
    if(!!this._watcher) this._watcher.unsubscribe();
  }

}
