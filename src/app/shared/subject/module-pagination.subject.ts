import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { ModulePagination } from "../model/module-pagination";

@Injectable()
export class ModulesPaginationService {

    public _modulePageBehaviour = new BehaviorSubject<ModulePagination>(null);

    constructor() { }

    getModulesPagination() : Observable<ModulePagination> {
        return this._modulePageBehaviour.asObservable();
    }

    setModulesPagination(pageDetails : ModulePagination){
        this._modulePageBehaviour.next(pageDetails);
    }
}