import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import { ModulesPaginationService } from "../shared/subject/module-pagination.subject";
import { Module } from "../shared/model/modules";
import { Course } from "../shared/model/courses";
import { ModulePagination } from "../shared/model/module-pagination";
import { ModuleService } from "./modules.service";
import { CoursesService } from "../courses/courses.service";

@Component({
  selector: 'module',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  _watcher : Subscription;
  _paginationObj : ModulePagination;
  _currentModule : Module;
  _moduleName : string;

  constructor(private _moduleService : ModuleService, private _moduleSubject : ModulesPaginationService,
  private _courseService : CoursesService) { }

  ngOnInit() {
    this.getPaginationSubject();
  }

  getPaginationSubject(){
    this._watcher = this._moduleSubject.getModulesPagination()
    .subscribe(page => {
      this._paginationObj = page;
      this._moduleName = page.moduleName;
      this.getAllModules();
    });

    this._moduleSubject.setModulesPagination(this._paginationObj);
  }

  getAllModules(){
    this._watcher = this._moduleService.getAllModules()
    .map((module : Module[]) => module.filter(mod => mod.moduleSeqNbr === this._paginationObj.getModuleSeqNbr()))
    .subscribe(mod => {
      this._paginationObj.moduleId = mod[0].moduleId;
      this._paginationObj.moduleName = mod[0].moduleName;

      this._moduleName = mod[0].moduleName;

      //console.log('pagination subject in course compoenent -->'+JSON.stringify(this._paginationObj));
      console.log('modules and courses for the filter---->'+JSON.stringify(mod[0]));
      this._currentModule = mod[0];
      this._courseService.setCourses(mod[0].courses);
    });
  }

  ngOnDestroy() {
    if(!!this._watcher) this._watcher.unsubscribe();
  }

}
