import { Course } from "./courses";

export class Module {
    moduleSeqNbr : number;
    moduleId : string;
    moduleName : string;
    courses : Course[];
    status : string;

    constructor() {}

    getModuleNbr(){
        return this.moduleSeqNbr;
    }

    setModuleNbr(moduleNbr : number){
        this.moduleSeqNbr = moduleNbr;
    }

    getModuleId(){
        return this.moduleId;
    }

    setModuleId(moduleId : string){
        this.moduleId = moduleId;
    }

    getModuleName(){
        return this.moduleName;
    }

    setModuleName(moduleName : string){
        this.moduleName = moduleName;
    }

    getCourses(){
        return this.courses;
    }

    setCourses(courses : Course[]){
        this.courses = courses;
    }

    getStatus(){
        return this.status;
    }

    setStatus(status : string){
        this.status = status;
    }
}