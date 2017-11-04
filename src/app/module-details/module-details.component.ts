import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ModulesPaginationService } from "../shared/subject/module-pagination.subject";
import { ModulePagination } from "../shared/model/module-pagination";

@Component({
  selector: 'learning-module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.scss']
})
export class ModuleDetailsComponent implements OnInit, OnDestroy {

  _pagination : ModulePagination;
  _subscription : Subscription;
  _showPrevious : boolean;
  _showNext : boolean;

  constructor(private _pageSubject : ModulesPaginationService) { }

  ngOnInit() {
    this.getPaginationObject();
  }

  getPaginationObject(){
    this._subscription = this._pageSubject.getModulesPagination()
    .subscribe(pageObj => {
      this._pagination = pageObj;
      this._showPrevious = this._pagination.showPrevious;
      this._showNext = this._pagination.showNext;      
      console.log('current pagination object in module-details is : '+JSON.stringify(this._pagination));
    });
  }

  PreviousModule(){
    this.getPaginationObject();

    let currentSeqNbr = this._pagination.moduleSeqNbr;
    let previouseSeq = currentSeqNbr - 1;

    if(previouseSeq > 1){
      this._pagination.moduleSeqNbr = previouseSeq;
      this._pagination.showPrevious = true;
      this._showPrevious = true;

      if(previouseSeq < this._pagination.modulesSize){
        this._pagination.showNext = true;
        this._showNext = true;
      }else{
        this._pagination.showNext = false;
        this._showNext = false;
      }

      if(previouseSeq <= 1){
        this._pagination.showPrevious = false;
        this._showPrevious = false;
      }
    }else{
      this._pagination.moduleSeqNbr = previouseSeq;
      this._pagination.showPrevious = false;
      this._showPrevious = false;

      this._pagination.showNext = true;
      this._showNext = true;
    }
    this._pageSubject.setModulesPagination(this._pagination);
  }

  nextModule(){
    this.getPaginationObject();

    let currentSeqNbr = this._pagination.moduleSeqNbr;
    if(currentSeqNbr >= this._pagination.modulesSize){
      this._showNext = false;
      this._pagination.showNext = false;
      this._showPrevious = true;
      this._pagination.showPrevious = true;
    }else {
      currentSeqNbr = currentSeqNbr + 1;

      this._pagination.moduleSeqNbr = currentSeqNbr;
      this._showNext = true;
      this._pagination.showNext = true;
      
      if(currentSeqNbr <= 1){
        this._showPrevious = false;
        this._pagination.showPrevious = false;
      }else{
        this._showPrevious = true;
        this._pagination.showPrevious = true;
      }

      if(currentSeqNbr == this._pagination.modulesSize){
        this._showNext = false;
        this._pagination.showNext = false;
      }
    }
    this._pageSubject.setModulesPagination(this._pagination);
  }

  ngOnDestroy() {
    if(!!this._subscription) this._subscription.unsubscribe();
  }
}
