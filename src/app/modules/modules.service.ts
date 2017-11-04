import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import { Module } from "../shared/model/modules";

@Injectable()
export class ModuleService {

    constructor(private _http : HttpClient) { }
    
    getAllModules() : Observable<Module[]>{
        return this._http.get<Module[]>('/assets/module-courses.json');
    }
}