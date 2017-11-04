export class ModulePagination {
    moduleSeqNbr : number;
    moduleId : string;
    modulesSize : number;
    moduleName : string;
    showPrevious : boolean;
    showNext : boolean;

    constructor() {}

    getModuleSeqNbr(){
        return this.moduleSeqNbr;
    }

    setModuleSeqNbr(moduleSeqNbr : number){
        this.moduleSeqNbr = moduleSeqNbr;
    }

    getModuleId(){
        return this.moduleId;
    }

    setModuleId(moduleId : string){
        this.moduleId = moduleId;
    }

    getModulesSize(){
        return this.modulesSize;
    }

    setModulesSize(modulesSize : number){
        this.modulesSize = modulesSize;
    }

    getModuleName(moduleName : string){
        return this.moduleName;
    }

    setModuleName(moduleName : string){
        this.moduleName = moduleName;
    }

    isShowPrevious(){
        return this.showPrevious;
    }

    setShowPrevious(previous : boolean){
        this.showPrevious = previous;
    }

    isShowNext(){
        return this.showNext;
    }

    setShowNext(next : boolean){
        this.showNext = next;
    }
}