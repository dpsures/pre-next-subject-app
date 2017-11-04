import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Course } from "../shared/model/courses";

@Injectable()
export class CoursesService {

    public _courseWatcher = new BehaviorSubject<Course[]>(null);

    constructor() { }

    getCourses() : Observable<Course[]> {
        return this._courseWatcher.asObservable();
    }

    setCourses(courses : Course[]){
        this._courseWatcher.next(courses);
    }
}