import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/operator/do';
import { ModulesPaginationService } from "../shared/subject/module-pagination.subject";
import { ModulePagination } from "../shared/model/module-pagination";

@Component({
  selector: 'learning-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  _paginationObj : ModulePagination;
  _subscription : Subscription;

  constructor(private _pageSubject : ModulesPaginationService) { }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses(){
    // this._subscription = this._pageSubject.getModulesPagination()
    // .subscribe(pagination => {
    //   console.log('pagination object for the very first time ---->'+JSON.stringify(pagination));
    //   this._paginationObj = pagination;
    //   this._paginationObj.moduleId = 'Part 1';
    //   this._paginationObj.moduleSeqNbr = 1;
    //   this._paginationObj.modulesSize = 3;
    // }, error => {
    //   console.log('error in subscribing module page in dashboard-component');
    // });

      this._paginationObj = new ModulePagination();
      this._paginationObj.moduleId = 'Part 1';
      this._paginationObj.moduleSeqNbr = 1;
      this._paginationObj.moduleName = 'Angular - Cli, Decorators';
      this._paginationObj.modulesSize = 3;
      this._paginationObj.showNext = true;
      this._paginationObj.showPrevious = false;

    this._pageSubject.setModulesPagination(this._paginationObj);
  }

  ngOnDestroy() {
    if(!!this._subscription) this._subscription.unsubscribe();
  }
}
